
import PGConfigMemory from "./in-memory/pg-config.memory";
import PGConfig from "./models/pg-config-model";

export const getAllPGConfig = () => {
    return PGConfig.findAll();
}

export const getPGConfigByCode = (code: string) =>{
    return PGConfigMemory.pgConfigs.find((config) => code === config.code)
}