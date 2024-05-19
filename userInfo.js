// task three


function createUserProfiles(string, modifiedNames) {
    let id = 1;
    return string.map((originalName, index) => {
      return {
        originalName,
        modifiedName: modifiedNames[index] || "",
        id: id++,
      };
    });
  }
  const string = ["abi", "rose", "efia", "anokyewaa", "kojo", "kwadwoa"];
  const modifiedNames = ["Abi", "Rose", "", "ANOKYEWAA", "koJO", "KWADWOA"];
  const userProfiles = createUserProfiles(string, modifiedNames);
  console.log(userProfiles);