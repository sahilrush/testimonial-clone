"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Loader, PlusSquareIcon, SquarePlus } from "lucide-react";
import { toast } from "sonner";
import { createProject } from "@/actions/project";
import { create } from "domain";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);


  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" flex justify-end w-full ">
        <Button size={"sm"} className="flex items-center gap-2 justify-end bg-purple-600 text-white hover:bg-purple-700 transition">
          Create Project <SquarePlus size={16} />
        </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="md:max-w-[500px] max-w-[80vw] rounded-lg shadow-lg bg-gray-800 p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">Create Project</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-gray-300">Project Name:</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter project name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="url" className="text-gray-300">Project URL:</Label>
            <span className="text-[10px] text-red-500">URL should be unique...</span>
            <Input
              id="projectUrl"
              name="projectUrl"  
              placeholder="Enter project URL: https://google.xyz/"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className="text-gray-300">Project Description:</Label>
            <span className="text-[10px] text-red-500">5 minimum characters required...</span>
            <Textarea
              id="projectDescription"
              name="projectDescription"  
              placeholder="Enter project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <DialogFooter>
            {loading ? (
              <Button disabled className="w-full bg-gray-600">
                <Loader size={16} className="animate-spin" />
              </Button>
            ) : (
              <Button  
              onClick={() => {
                createProject({title: name, url: url, description: description});     
              }}

              type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700 transition">
                Create Project
                <PlusSquareIcon size={16} className="ml-1" />
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProject;
