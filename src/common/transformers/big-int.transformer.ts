import { ValueTransformer } from "typeorm";
import { isNullOrUndefined } from "../utils/utils";

export class ColumnBigIntTransformer implements ValueTransformer {
  to(data?: number | null): number | null {
    if (!isNullOrUndefined(data)) {
      return data;
    }
    return null;
  }

  from(data?: string | null): number | null {
    if (!isNullOrUndefined(data)) {
      const res = parseFloat(data);
      return isNaN(res) ? null : res;
    }
    return null;
  }
}
