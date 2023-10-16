const express = require('express');
const asyncHanlder = require('express-async-handler');


const problemModel = require('../models/problemModel');
const testcaseModel = require('../models/testcaseModel');
const submissionModel = require('../models/submissionModel');
const userSchema = require('../models/UserModel');


export const getProblems = asyncHanlder(async (req, res) => {
    const problems = await problemModel.find();
    res.status(201).json(problems);
});
 
export const setProblem = asyncHanlder(async (req, res) => {
    const { statement, difficulty, score } = req.body;

    if(!statement || !difficulty || !score) throw new Error('Please provide all the fields');

    const problem = await problemModel.create({ ...req.body });
    if (!problem) throw new Error("Problem is not added...");
    res.status(200).json(problem);
});
export const setTestCases = asyncHanlder(async(req,res) => {

    const { sequence , data } = req.body;
    if(!sequence || !data ) throw new Error('please add all the valid fields');
    const createdTestcases = await testcaseModel.create({ ... req.body , problem_id : '650d3db4fc61717364d7f10c'}) 
    res.status(201).json({ createdTestcases });

})
export const getTestCases = asyncHanlder(async(req,res) => {
    const problems = await testcaseModel.find({ problem_id : '650d3db4fc61717364d7f10c' });
    res.status(201).json(problems);
})

export const setSubmissions = asyncHanlder(async (req,res) => {
    console.log("SUBMISSION REGISTED SUCCESSFULLY :>)")
    const newSubmission = await submissionModel.create({ ...req.body, userId: '650d43df025698a3870f644e',problemId:'650d3db4fc61717364d7f10c' });
    res.status(201).json(newSubmission);
})
export const addUser = asyncHanlder(async(req,res) => {
    console.log("USER CREATED SUCCESSFULLY :)")
    const newUser = await userSchema.create({...req.body, totalProblemSolved: 10, accuracy : 90});
    res.status(201).json(newUser);
})
