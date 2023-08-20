import PGConfig from "@datasources/models/pg-config-model";
import { getAllPGConfig } from "@datasources/pg-config.datasource";

export default class PGConfigMemory {
    static pgConfigs: PGConfig[];

    static async init(){
        if(!PGConfigMemory.pgConfigs) PGConfigMemory.pgConfigs = await getAllPGConfig();
    }
}