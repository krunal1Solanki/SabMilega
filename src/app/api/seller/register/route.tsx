import sellerModel from "../../../../models/sellerModel";
import { connect } from "../../../../dbConnection";
import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

connect();

export async function POST(request: NextRequest) {
    try {
        const body = await request.formData();
        const email = body.get("email");
        const password = body.get("password");
        const shopName = body.get("shopName");
        const shopAddress = body.get("shopAddress");
        const gstNumber = body.get("gstNumber");
        const phoneNumber = body.get("phoneNumber");
        const profilePicture = body.get("profilePicture");
        const companyLogo = body.get("companyLogo");
        const timestamp = Date.now();
        let profilePicturePath = null;
        let companyLogoPath = null;

        // Create images folder if it doesn't exist
        const imagesFolder = join(process.cwd(), 'images');
        await mkdir(imagesFolder, { recursive: true });

        if (profilePicture) {
            //@ts-ignore
            const bytes = await profilePicture.arrayBuffer();
            const buffer = Buffer.from(bytes);

            //@ts-ignore
            const relativePath = `images/${timestamp}_${profilePicture.name}`;
            const absolutePath = join(process.cwd(), relativePath);

            await writeFile(absolutePath, buffer);
            profilePicturePath = relativePath;
        }

        if (companyLogo) {
            //@ts-ignore
            const bytes = await companyLogo.arrayBuffer();
            const buffer = Buffer.from(bytes);
            //@ts-ignore
            const relativePath = `images/${timestamp}_${companyLogo.name}`;
            const absolutePath = join(process.cwd(), relativePath);

            await writeFile(absolutePath, buffer);
            companyLogoPath = relativePath;
        }

        console.log(email, password, shopName, shopAddress, gstNumber, phoneNumber, profilePicturePath, companyLogoPath)
  
        const sellerData = new sellerModel({
            email,
            password,
            shopName,
            shopAddress,
            gstNumber,
            phoneNumber,
            profilePicture: profilePicturePath,
            companyLogo: companyLogoPath
        });

        await sellerData.save();

        return NextResponse.json({
            message: "User has been saved successfully"
        });
    } catch (err: any) {
        console.log(err.message)
        return NextResponse.json({
            error: err.message,
        });
    }
}
