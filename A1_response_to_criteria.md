Assignment 1 - REST API Project - Response to Criteria
================================================

Overview
------------------------------------------------

- **Name:** Rena Tran
- **Student number:** N11288353
- **Application name:** Video Codec Trabnscoder
- **Two line description:** Utilizes a REST API to transcode videos with ffmpeg.


Core criteria
------------------------------------------------

### Containerise the app

- **ECR Repository name:** n11288353/n11288353-assesment1
- **Video timestamp:** 0:00
- **Relevant files:** 
    - /frontend/Dockerfile
    - /backend/Dockerfile
### Deploy the container

- **EC2 instance ID:** i-09ade172ed4c9a8a4 (n11288353A1)
- **Video timestamp:**0:44

### User login

- **One line description:**Registration is handled through mariadb validation utilising a json web token and storing it as a cookie.
- **Video timestamp:**1:00
- **Relevant files:**
    - /backend/controller/userController.js Line 36
    - /backend/routes/userRoutes.js Line 6

### REST API

- **One line description:** Endpoints for users are: Login/Register/Logout videos: videos/upload/reformat/download
- **Video timestamp:** 1:25
- **Relevant files:**
    - /backend/routes/userRoutes Lines 5,6,7
    - /backend/routes/videoRoutes Lines 6,7,8,9,10
### Data types

- **One line description:** Application stores the Video Metadata, Video Thumbnails and Video Upload files.
- **Video timestamp:** 0:37
- **Relevant files:**
    - /backend/db.js Line 27 
    - /backend/app.js Line 44    
    - /backend/app.js Line 45
#### First kind

- **One line description:** Video Metadata
- **Type:** Structured, MariaDB
- **Rationale:** Video Metadata is stored and can only be viewed by their respective owners.
- **Video timestamp:** 0:37
- **Relevant files:**
    - /backend/db.js Line 27 

#### Second kind

- **One line description:** Video Thumbnails
- **Type:** Unstructured, BLOB
- **Rationale:** Images are too large for a database and stored locally.
- **Video timestamp:**
- **Relevant files:**
  -  /backend/app.js Line 45

### CPU intensive task

 **One line description:** Uploading videos and Transcoding videos via FFmpeg. 
- **Video timestamp:** 1:15
- **Relevant files:**
    - /backend/videoController.js Line 18 & 301

### CPU load testing

 **One line description:** Uploading and transcoding a video. 
- **Video timestamp:** 1:55
- **Relevant files:**
    - /backend/videoController.js Line 274 & 29

Additional criteria
------------------------------------------------

### Extensive REST API features

- **One line description:** User- Login/Registration Video- Upload/Reformat/Download
- **Video timestamp:**
- **Relevant files:**
    - /backend/routes
    - /backend/controllers

### External API(s)

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 

### Additional types of data

- **One line description:** Video Thumbnail, Metadata and Upload file
- **Video timestamp:**1:50
- **Relevant files:**
    - /backend/db.js Line 27 
    - /backend/app.js Line 44    
    - /backend/app.js Line 45

### Custom processing

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 

### Infrastructure as code

- **One line description:** Docker Compose used to initialise the frontend, backend and db on one line in EC2.
- **Video timestamp:** 0:00
- **Relevant files:**
    - ./docker-compose.yml

### Web client

- **One line description:** React API frontend
- **Video timestamp:** 00:46
- **Relevant files:**
    -   /frontend/src/pages
    -   /frontend/src/forms

### Upon request

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 
