import sellerModel from "../../../../models/sellerModel";
import { connect } from "../../../../dbConnection";
import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";


connect();

export async function POST(request: NextRequest) {
    try {
        // Extract email and password from request body
        const { email, password } = await request.json();

        // Find the seller in the database based on the provided email
        const seller = await sellerModel.findOne({ email });

        // If seller is not found, return an error response
        if (!seller) {
            return NextResponse.json({
                success: false,
                error: "Seller not found. Please check your credentials.",
            });
        }

        // If the password provided does not match the stored password, return an error response
        if (seller.password !== password) {
            return NextResponse.json({
                success: false,
                error: "Incorrect password. Please try again.",
            });
        }

         let profilePicture,companyLogo;
        if (seller.profilePicture) {
            // Read the file content if attachments field exists
            //@ts-ignore
            const fileBuffer = await readFile(seller.profilePicture);
            profilePicture = fileBuffer.toString("base64"); // Sending base64 encoded file content
        }

        if (seller.companyLogo) {
            // Read the file content if attachments field exists
            //@ts-ignore
            const fileBuffer = await readFile(seller.companyLogo);
            companyLogo = fileBuffer.toString("base64"); // Sending base64 encoded file content
        }

        // If email and password are correct, return a success response
        let newSeller = seller;
        newSeller.profilerPicture = profilePicture;
        newSeller.companyLogo = companyLogo;
        
        console.log("NEW SELLRer", newSeller)

        return NextResponse.json({
            success: true,
            message: "Seller login successful.",
            seller : newSeller
        });
    } catch (err: any) {
        console.error(err.message);
        return NextResponse.json({
            success: false,
            error: err.message,
        });
    }
}
