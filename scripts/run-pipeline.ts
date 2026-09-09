import { runPipeline } from "../src/gem/pipeline";

async function main(){

    await runPipeline();

}

main()
.catch(console.error)
.finally(()=>process.exit(0));