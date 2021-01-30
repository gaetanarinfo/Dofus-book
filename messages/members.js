module.exports = newMembers => {

    const guild = member.guild;
    newUsers.set(member.id, member.user);

    if (newUsers.size > 10) {
        const defaultChannel = guild.channels.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
        const userlist = newUsers.map(u => u.toString()).join(" ");
        const msg = server.join.replace('{user}', '<@' + member.id + '>');
        defaultChannel.guild.channels.find("name", server.channel).send('Bienvenue sur mon bot ' + msg + ' tape en une avec !info' + userlist);
        newUsers.clear();
    }
}