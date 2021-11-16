/* eslint-disable @typescript-eslint/no-empty-function */
import Realm from 'realm';

import { BaseSchemas } from './base.realm';

const schemaList = [...BaseSchemas];

const schemas: Realm.Configuration[] = [
  { schema: schemaList, schemaVersion: 1, migration: () => {} },
];

schemas.forEach((schema) => ({
  ...schema,
  deleteRealmIfMigrationNeeded: true,
}));

let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath);

if (nextSchemaIndex !== -1) {
  while (nextSchemaIndex < schemas.length) {
    const migratedRealm = new Realm(schemas[nextSchemaIndex++]);
    migratedRealm.close();
  }
}

export default function getRealm() {
  const realm = Realm.open(schemas[schemas.length - 1]);

  return realm;
}
