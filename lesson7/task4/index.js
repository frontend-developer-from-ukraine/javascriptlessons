function getMessagesForBestStudents(allStudents, faildStudents) =>
allStudents
    .filter(name => !faildStudents.includes(name))
    .map(name => 'Good job, ' + name);
return allStudents;
}