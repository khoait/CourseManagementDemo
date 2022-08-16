/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity vus_student
export const vus_studentMetadata = {
  typeName: "mscrm.vus_student",
  logicalName: "vus_student",
  collectionName: "vus_students",
  primaryIdAttribute: "vus_studentid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    vus_registeredon: "DateAndTime:UserLocal",
  },
  navigation: {
    vus_contactid: ["mscrm.contact"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
  },
};

// Attribute constants
export const enum vus_studentAttributes {
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  statecode = "statecode",
  statuscode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  vus_contactid = "vus_contactid",
  vus_contactidName = "vus_contactidname",
  vus_contactidYomiName = "vus_contactidyominame",
  vus_firstname = "vus_firstname",
  vus_fullname = "vus_fullname",
  vus_lastname = "vus_lastname",
  vus_registeredon = "vus_registeredon",
  vus_studentId = "vus_studentid",
}

// Early Bound Interface
export interface vus_student extends IEntity {
  // Created By LookupType Unique identifier of the user who created the record.
  createdby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Modified By LookupType Unique identifier of the user who modified the record.
  modifiedby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Owner Id
  ownerid?: import("dataverse-ify").EntityReference | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("dataverse-ify").EntityReference | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("dataverse-ify").EntityReference | null;
  // Status vus_student_vus_student_statecode Status of the Student
  statecode?: import("../enums/vus_student_vus_student_statecode").vus_student_vus_student_statecode | null;
  // Status Reason vus_student_vus_student_statuscode Reason for the status of the Student
  statuscode?: import("../enums/vus_student_vus_student_statuscode").vus_student_vus_student_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  // Contact LookupType
  vus_contactid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  vus_contactidname?: string | null;
  //  StringType
  vus_contactidyominame?: string | null;
  // First Name [Required] StringType
  vus_firstname?: string;
  // Full Name [Required] StringType
  vus_fullname?: string;
  // Last Name [Required] StringType
  vus_lastname?: string;
  // Registered On DateTimeType DateAndTime:UserLocal
  vus_registeredon?: Date | null;
  // Student UniqueidentifierType Unique identifier for entity instances
  vus_studentid?: import("dataverse-ify").Guid | null;
}
