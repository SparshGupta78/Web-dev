let logindata = {}

let currentlogin = {
    username: '',
    password: ''
};

exports.homeController = (req, res) => {
    res.render('InputFlow-home');
}

exports.dashboardController = (req, res) => {
    res.render('InputFlow-dashboard', {user: currentlogin.username});
}

exports.loginController = (req, res) =>  {
    res.render('InputFlow-login');
}

exports.loginSubmitController = (req, res) => {
    let isfound = 0;
    Object.entries(logindata).forEach(([user, pass]) => {
        if(req.body.username == user && req.body.password == pass){
            isfound = 1;
        }
    });

    if (isfound == 0){
        res.redirect('/signup');        
    } else {
        currentlogin.username = req.body.username;
        currentlogin.password = req.body.password;
        res.redirect('/dashboard');
    }
}

exports.logoutController = (req, res) => {
    currentlogin.username = '';
    currentlogin.password = '';
    res.redirect('/dashboard');
}

exports.signupController = (req, res) =>  {
    res.render('InputFlow-signup');
}

exports.signupSubmitController = (req, res) => {
    logindata[req.body.username] = req.body.password;
    currentlogin.username = req.body.username;
    currentlogin.password = req.body.password;
    res.redirect('/dashboard');
}

exports.createController = (req, res) => {
    if (currentlogin.username != '' && currentlogin.password != ''){
        res.render('InputFlow-createForm');
    } else {
        res.redirect('/login');
    }
}

let publishedForms = '';

exports.publishController = (req, res) => {
    publishedForms =  req.body.formHtmlData;
    res.render('InputFlow-publishForm');
}

exports.formController = (req, res) => {
    res.render('InputFlow-Form', {formData: publishedForms});
}

let submittedResponses = {};
exports.submitController = (req, res) => {
    Object.entries(req.body).forEach(([ques, ans]) => {
        submittedResponses[ques] = ans;
    });
    res.render('InputFlow-submit');
}

exports.viewController = (req, res) => {
    if (currentlogin.username != '' && currentlogin.password != ''){
        res.render('InputFlow-viewResponse', {response: submittedResponses});
    } else {
        res.redirect('/login');
    }
}

exports.errorController = (req, res) => {
    res.render('InputFlow-error');
}