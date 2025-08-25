import {BookModel} from"../models/index.js";
import {isEmpty} from"../utils/validators.js";
import { capitalizeFirstLetters } from "../utils/helpers.js";

export const getBooks=async(req,res)=>{
    const books=await BookModel.findAll();
    res.json(books);
};

export const getBookById=async(req,res)=>{
    const book= await BookModel.findById(req.params.id);
    if(!book){
        return res.status(404).send("Book not found");
    }
    res.json(book);
    
};

export const createBook= async(req,res)=>{
    const{title,author,published,description}=req.body;

    if(isEmpty(title) ||isEmpty(author)||isEmpty(published)){
        return res.status(400).send("Please fill all required fields");
    }
    const newBook= await BookModel.create({
      title: capitalizeFirstLetters(title),
      author: capitalizeFirstLetters(author),
      published,
      description: description 
    });
    res.status(201).json(newBook);
};

export const updateBook=async(req,res)=>{
    try{
        const {title,author,published,description}= req.body;
        if(!title||!author||!published){
            return res.status(400).send("Please fill all required fields");
        }
        const updatedBook=await BookModel.update(req.params.id,{
            ...req.body,
            description: description||"No description",
        });
        res.json(updatedBook);
    }catch{
        res.status(404).send("Book not found");
    }
};

export const deleteBook=async(req,res)=>{
    try{
        await BookModel.delete(req.params.id);
        res.send("Book deleted");
    }catch{
        res.status(404).send("Book not found");
    }
};