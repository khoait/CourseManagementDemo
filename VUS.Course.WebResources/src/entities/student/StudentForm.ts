import { vus_studentAttributes, vus_studentMetadata } from "../../dataverse-gen/entities/vus_student";

export class StudentForm {
  static async showStudentName(executionContext: Xrm.Events.EventContext) {
    const formContext = executionContext.getFormContext();
    const name =
      formContext.getAttribute<Xrm.Attributes.StringAttribute>(vus_studentAttributes.vus_fullname)?.getValue() ?? "";
    await Xrm.Navigation.openAlertDialog({ title: "Current Student Name", text: name, confirmButtonLabel: "Okayyyy" });
  }

  static async validateStudentName(executionContext: Xrm.Events.EventContext) {
    const formContext = executionContext.getFormContext();
    const name =
      formContext.getAttribute<Xrm.Attributes.StringAttribute>(vus_studentAttributes.vus_fullname)?.getValue() ?? "";

    if (name.includes("Test JS")) {
      await Xrm.Navigation.openAlertDialog({
        title: "Invalid Student Name",
        text: "Student name must not contain Test JS",
        confirmButtonLabel: "Okay",
      });
    }

    // Call web api from script using Xrm.WebApi
    // try {
    //   const results2 = await Xrm.WebApi.retrieveMultipleRecords(
    //     vus_studentMetadata.logicalName,
    //     `$select=vus_firstname,vus_lastname&$filter=(vus_firstname eq '${name}')`,
    //   );
    //   console.log(results2.entities);
    // } catch (error) {
    //   console.log(error);
    // }

    // Call web api from script using Fetch API
    // const result = await fetch(
    //   `/api/data/v9.2/vus_students?$select=vus_firstname,vus_lastname&$filter=(vus_firstname eq '${name}')`,
    // );
    // const json = await result.json();
    // console.log(json);
  }
}
