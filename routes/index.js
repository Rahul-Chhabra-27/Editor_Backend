const express = require("express");
const { addUser, setProblem, setSubmissions,setTestCases,getProblems,getTestCases } = require('../controller/index');

const router = express.Router();

router.route('/problems').get(getProblems).post(setProblem);
router.route('/testcase').get(getTestCases).post(setTestCases);
router.post('/user',addUser);
router.post('/submissions',setSubmissions);

module.exports = router;
