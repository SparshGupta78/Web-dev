//External modules
const express = require('express');

//Local modules
const {homeController} = require('../controls/controller');
const {dashboardController} = require('../controls/controller');
const {loginController} = require('../controls/controller');
const {loginSubmitController} = require('../controls/controller');
const {logoutController} = require('../controls/controller');
const {signupController} = require('../controls/controller');
const {signupSubmitController} = require('../controls/controller');
const {createController} = require('../controls/controller');
const {publishController} = require('../controls/controller');
const {formController} = require('../controls/controller');
const {submitController} = require('../controls/controller');
const {viewController} = require('../controls/controller');
const {errorController} = require('../controls/controller');

const router = express.Router();

router.get('/', homeController);
router.use('/dashboard', dashboardController);
router.use('/login', loginController);
router.post('/login-submit', loginSubmitController);
router.use('/logout', logoutController);
router.use('/signup', signupController);
router.post('/signup-submit', signupSubmitController);
router.use('/create', createController);
router.post('/publish', publishController);
router.use('/form', formController);
router.post('/submit', submitController);
router.use('/view', viewController);
router.use(errorController);

module.exports = router;