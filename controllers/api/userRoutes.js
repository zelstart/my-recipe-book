const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
   try{
    const userData = await User.create(req.body);
    
    req.session.save(() => {
       req.session.user_id = userData.id;
       req.session.logged_in = true;
       res.status(200).json(userData);
    });
   } catch (err) {
     res.status(400).json(err);
   }
});


//log user in, if they exists and entered the correct password.
router.post('/login', async (req, res) => {
   console.log("test");
   try{
      //validate user exists.
    const userData = await User.findOne({ where: { username: req.body.username } });
 
    if (!userData) {
      console.log("name");
    res
       .status(400)
       .json({ message: 'Incorrect username or password, please try again' });
       return;
     }
  
    //check if password matches
     const validPassword = await userData.checkPassword(req.body.password);
 
     if (!validPassword) {
      console.log("password");
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
     }

    //log the user in.
     req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'You are now logged in!' });
     });

   } catch (err) {
      console.log(err);
     res.status(400).json(err);
   }
});

router.post('/logout', (req,res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// get all users (api/users)
router.get('/', async (req, res) => {
   try {
       const users = await User.findAll();
       res.json(users);
   } catch (err) {
       res.status(500).json(err);
   }
});

module.exports = router;