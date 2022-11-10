module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
              to: `${result?.email}`,
              from: 'hroshid695@gmail.com', // e.g. single sender verification in SendGrid
              subject: `${result?.subject}`, // Replace with a valid field ID
              html: `
               <h1>Thank you ${result?.fullName} to message us</h1>
               <p>Your message is :  ${result?.description}</p>
               <h4>If you are not registered , please register and see all blogs,manage dashboard etc.</h4> 
              `, 
            })
        } catch(err) {
            console.log(err);
        }
    }
}

