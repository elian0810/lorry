import { ILike, Brackets } from 'typeorm';

export function isNullOrUndefined<T>(obj: T | null | undefined): obj is null | undefined {
  return obj === null || obj === undefined;
}

export function parseQueryParams(queryParams: Record<string, any>, ignoreParams?: string[]): object {
  const orConditions: Record<string, any>[] = [];

  // create a new object without the ignored params
  const queryParamsWithoutIgnoredParams = Object.keys(queryParams)
    .filter((key) => !(ignoreParams?.includes(key)))
    .reduce((obj: Record<string, any>, key) => {
      obj[key] = queryParams[key];
      return obj;
    }, {});

  Object.keys(queryParamsWithoutIgnoredParams).forEach((key) => {
    const orCondition: Record<string, any> = {};
    orCondition[key] = ILike(`%${queryParamsWithoutIgnoredParams[key]}%`);
    orConditions.push(orCondition);
  });

  const where = new Brackets((qb) => {
    orConditions.forEach((condition, index) => {
      if (index > 0) {
        qb.orWhere(condition);
      } else {
        qb.where(condition);
      }
    });
  });

  return where;
}
