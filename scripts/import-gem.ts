import { importGemTenders } from "../src/gem/importer";

importGemTenders()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });