// JSON for Nested data

var bio = {
    "name": "Rishad Yamnoor",
    "role": "Web Developer, UI Designer",
    "contacts": {
        "mobile": "+91 966-323-9799",
        "email": "rishad.yamnoor@gmail.com",
        "twitter": "@EvolofThings",
        "github": "evolofthings",
        "location": "Bengaluru"
    },
    "bioPic": "images/WhatsAppDP.jpeg",
    "welcomeMsg": "Bringing futuristic ideas to reality",
    "skills": ["HTML", "CSS", "JavaScript", "Git", "JQuery", "Ajax"],
};
//bio display function
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts['mobile']);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts['email']);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts['twitter']);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts['github']);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts['location']);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);

    if(bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill){
                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkills);
        });
    }
};

var education = {
    "schools": [
    {
        "name": "Northeastern University",
        "degree": "Masters",
        "dates": "2013 - 2015",
        "location": "Boston, MA, US",
        "majors": ["Drug Regulatory Affairs"],
        "url": "https://www.northeastern.edu/graduate/program/master-of-science-in-regulatory-affairs-for-drugs-biologics-and-medical-devices-boston-258/"
    },
    {
        "name": "Sir M. Vivesvaraya Institute of Technology",
        "degree": "Under Graduate",
        "dates": "2009 - 2013",
        "location": "Bengaluru, KA, India",
        "majors": ["Biotechnology Engineering"],
        "url": "http://www.sirmvit.edu/departments/biotechnology/"
    }
    ],
    "onlineCourses": [
    {
        "school": "Udacity",
        "title": "Front-end Web Development Nanodegree",
        "dates": "2016 (in progress)",
        "url": "https://udacity.com"
    },
    {
        "school": "Free Code Camp",
        "title": "Front-end Web Developer",
        "dates": "2016",
        "url": "https://freecodecamp.com"
    }
    ]
};
//education display function
education.display = function () {
    if(education.schools.length > 0) {
        education.schools.forEach(function(school){
            $("#education").append(HTMLschoolStart);

            var formattedschoolName = HTMLschoolName.replace("#", school.url).replace("%data%", school.name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
            var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

            $(".education-entry:last").append(formattedschoolNameDegree, formattedschoolDates, formattedschoolLocation, formattedschoolMajor);
        });
    }

    if(education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);  //Placed before the loop otherwise it will be repeated twice.
        education.onlineCourses.forEach(function(online){
            $("#education").append(HTMLschoolStart);

            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
            var formattedTitleSchool = formattedonlineTitle + formattedonlineSchool;
            var formattedonlineDates = HTMLonlineDates.replace("%data%", online.dates);
            var formattedonlineURL = HTMLonlineURL.replace('#', online.url).replace("%data%", online.school);

            $(".education-entry:last").append(formattedTitleSchool, formattedonlineDates, formattedonlineURL);
        });
    }
};

var work = {
    "jobs": [
    {
        "jobPosition": "Web Developer",
        "employer": "Freelance",
        "dates": 'in progress',
        "location": "Remote",
        "description": "Built websites for clients who hired me through freelance working sites"
    },
    {
        "jobPosition": "Clinical SAS Programmer trainee",
        "employer": "Rang Technologies",
        "dates": "Oct 2015 to Feb 2016",
        "location": "Piscataway, NJ, US",
        "description": "Creating Tables, Lists, Figures and Graphs while conforming to ADam and SDTM coding standards",
        "url": "http://www.rangtech.com/"
    }
    ]
};
//work display function
work.display = function () {
    if(work.jobs.length > 0) {
        work.jobs.forEach(function(job){
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("#", job.url).replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.jobPosition);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
        });
    }
};

var projects = {
    "projects": [
    {
        "title": "Portfolio",
        "dates": "2017",
        "description": "Portfolio of projects that I have built as part of Udacity Nanodegree program.",
        "images": ["images/197x148.gif", "images/197x148.gif"],
        "url": "https://evolofthings.github.io/Udacity-Front-End-Nanodegree/#"
    }
    ]
};
//projects display function
projects.display = function () {
    if (projects.projects.length > 0) {
        projects.projects.forEach(function(project){
            $("#projects").append(HTMLprojectStart);

                var formattedTitle = HTMLprojectTitle.replace("#", project.url).replace("%data%", project.title);
                var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

            if (project.images.length > 0) {
                project.images.forEach(function(image){
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                });
            }
        });
    }
};

// Resume sections displayed
bio.display();
education.display();
work.display();
projects.display();










// Internationalize Names

function inName(name) {
    name =  name.trim().split(" ");
    name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();

return name[0] +" "+ name[1];
}
$("#header").append(internationalizeButton);


$("#mapDiv").append(googleMap);












































