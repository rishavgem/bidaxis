import { importGemTenders } from "./importer";
import { prisma } from "../lib/prisma";
import { extractBid } from "./extractor";

export async function runPipeline() {

    console.log("=================================");
    console.log("STEP 1 : IMPORT");
    console.log("=================================\n");

    await importGemTenders();

    console.log("\n=================================");
    console.log("STEP 2 : EXTRACTION");
    console.log("=================================\n");

    const tenders = await prisma.tender.findMany({

        where:{

            pdfExtracted:false

        },

        orderBy:{
            createdAt:"asc"
        }

    });

    console.log(`Pending : ${tenders.length}\n`);

    let success=0;
    let failed=0;

    for(const tender of tenders){

        try{

            await extractBid(tender.gemId!);

            success++;

        }catch(err){

            failed++;

            console.log(err);

        }

    }

    console.log("\n==============================");

    console.log("Finished");

    console.log("==============================");

    console.log("Success :",success);

    console.log("Failed :",failed);

}