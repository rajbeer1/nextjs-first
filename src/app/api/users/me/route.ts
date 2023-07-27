import { getDataFromToken } from "@/helpers/getDateFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();
export async function GET(request: NextRequest) {
  try {
    const userid = await getDataFromToken(request);
    const user = await User.findOne({ _id: userid }).
      select("-password");
    return NextResponse.json({
      data:user
    })
   }
  catch (error: any) {
    return NextResponse.json({
      error:error.message
    },{status:500})
  }
}