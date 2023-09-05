function onCreate() {
  setContractorOnCreate();
}

function setContractorOnCreate() {
  debugger;
  try {
    const data = EdocsApi.getInExtAttributes(CurrentDocument.id.toString());
    EdocsApi.setAttributeValue({ code: "ContractorRPEmail", value: data.tableAttributes.filter(x => x.code == "ContactPersonEmail").map(y => y.value)[1] });
  } catch (e) {
    EdocsApi.setAttributeValue({ code: "ContractorRPEmail", value: "" });
  }
}
