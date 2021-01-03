function titleCaseEdit(title) {
  // Insert code here;
  let FixingTittle = title.toLowerCase();
  FixingTittle = FixingTittle.split(" ");
  for(let i = 0; i <FixingTittle.length;i++){
    FixingTittle[i] = FixingTittle[i].charAt(0).toUpperCase() + FixingTittle[i].slice(1);
  }
  return FixingTittle.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;