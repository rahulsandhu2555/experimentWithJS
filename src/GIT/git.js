// GIT => distributed version control system
import React from "react";
import {
  convertToView,
  convertToViewFromArrayOfObj,
} from "../components/PageCompnents/componentList";

function Git() {
  const data = [
    {
      sec: {
        h4: "Steps",
        list: [
          "touch index.html  //to create file",
          "git init //to initialise the directory",
          'git config --global user.name "sandhu.rahul25"',
          "git config --global user.email 'sandhu.rahul25@gmail.com'",
          "git add index.html",
          "git add .",
          "git status",
          "git rm --cached index.html",
          "git commit",
          "git commit -m 'comment'",
          "git branch notification_feature",
          "git checkout notification_feature",
          "git merge testLogin",
        ],
      },
    },
    {
      sec: {
        h4: "Git remote step",
        list: [
          "git remote -v",
          "git remote set-url origin http://gitlab.dewsolutions.in/reusable-components/frontend/react/sso-admin-web.git",
        ],
      },
    },
    {
      sec: {
        h4: "To add GIT repo",
        list: [
          "git init -b main",
          "git add .",
          'git commit -m "First commit"',
          "git remote add origin https://github.com/rahulsandhu2555/tagandtech.git",
          "git remote add origin git@github.com:rahulsandhu2555/finedu-backend.git",
          "git remote -v",
          "git push origin main",
        ],
      },
    },
  ];

  return (
    <>
      ...Git
      {convertToViewFromArrayOfObj(data)}
    </>
  );
}
export default Git;
