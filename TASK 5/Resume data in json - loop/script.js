let resumeData = {
  name: "Jegan",
  title: "Full stack Web Developer",
  contact: {
    email: "jegan7798@gmail.com.com",
    phone: "8587916516",
    address: "Chennai,Tamilnadu",
  },
  skills: ["HTML", "CSS", "JavaScript", "React"],
  experience: [
    { title: "Frontend Developer", company: "ABC Corp", year: "2019-2020" },
    { title: "Web Developer", company: "XYZ Inc", year: "2020-present" },
  ],
  education: {
    degree: "Bachelor of Science",
    major: "Mechanical",
    university: "Anna University",
    year: "2015-2019",
  },
};

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < Object.keys(resumeData).length; i++) {
  let key = Object.keys(resumeData)[i];
  console.log(key, ":", resumeData[key]);
}

// Using for...in loop
console.log("\nUsing for...in loop:");
for (let key in resumeData) {
  console.log(key, ":", resumeData[key]);
}

// Using for...of loop (for arrays)
console.log("\nUsing for...of loop:");
for (let skill of resumeData.skills) {
  console.log("Skill:", skill);
}

// Using forEach loop (for arrays)
console.log("\nUsing forEach loop:");
resumeData.skills.forEach((skill) => {
  console.log("Skill:", skill);
});
