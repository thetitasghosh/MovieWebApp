import DBconfig from "@/utils/DBconfig"
import Contact from "@/models/contact";
import {NextResponse} from "next/server";


export async function POST(req, res) {
    console.log("POST request received");
    try {

        const body = await req.json();
        await DBconfig();

        await Contact.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}