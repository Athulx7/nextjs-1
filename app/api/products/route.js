
import { NextResponse } from "next/server";
import { mongoConnet } from "../../../config/mongoConnect";

import { product } from "../../models/productModels";

export async function GET(req,res) {
    await mongoConnet()

    const products = await product.find()
    // console.log(products)
    return new NextResponse(JSON.stringify(products), {status:200})
}




