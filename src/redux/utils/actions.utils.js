const getCurrentMember = (members, id) => {
  let member = [];
  member = members.filter(member => member.id === id);
  return member;
};

export default getCurrentMember;
