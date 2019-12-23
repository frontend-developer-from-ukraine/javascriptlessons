function getMessagesForBestStudents(allStudents, faildStudents) =>
let all = allStudents
    .filter(name => !faildStudents.includes(name))
    .map(name => 'Good job, ' + name);
return all;