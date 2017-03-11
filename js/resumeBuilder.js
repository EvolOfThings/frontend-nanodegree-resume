// JSON for Nested data

var bio = {
    "name": "Rishad Yamnoor",
    "role": "Web Developer, UI Designer",
    "contacts": [
    {
        "mobile": "+91 966-323-9799",
        "email": "rishad.yammnoor@gmail.com",
        "twitter": "@EvolofThings",
        "github": "evolofthings",
        "location": "Bengaluru"
    }
    ],
    "bioPic": "images/WhatsAppDP.jpeg",
    "welcomeMsg": "Bringing futuristic ideas to reality",
    "skills": ["HTML", "CSS", "JavaScript", "Git", "JQuery", "Ajax"],
};
// For-in loop is not suitable for this bio object
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills.join(",  "));
    $("#skills").append(formattedSkills);

    for (contact in bio.contacts) {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
    $("#topContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub, formattedLocation),
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub, formattedLocation);
    }
}


var education = {
    "schools": [
    {
        "name": "Northeastern University",
        "degree": "Masters",
        "dates": "June 2015",
        "location": "Boston, MA, US",
        "major": ["Drug Regulatory Affairs"],
    },
    {
        "name": "Sir M. Vivesvaraya Institute of Technology",
        "degree": "Under Graduate",
        "dates": "June 2013",
        "location": "Bengaluru, KA, India",
        "major": ["Biotechnology Engineering"],
    }
    ],
    "onlineCourses": [
    {
        "school": "Udacity",
        "title": "Front-end Web Development Nanodegree",
        "dates": 2017,
        "url": "https://udacity.com"
    },
    {
        "school": "Free Code Camp",
        "title": "MOOC Platform",
        "dates": 2016,
        "url": "https://freecodecamp.com"
    }
    ]
}
education.display = function () {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", (education.schools[school].name));
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", (education.schools[school].degree));
        var formattedschoolDates = HTMLschoolDates.replace("%data%", (education.schools[school].dates));
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", (education.schools[school].location));
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", (education.schools[school].major));
        $(".education-entry:last").append(formattedschoolName + formattedschoolDegree, formattedschoolDates, formattedschoolLocation, formattedschoolMajor);
    }
    $("#education").append(HTMLonlineClasses);  //Placed before the loop otherwise it will be repeated twice.
    for (var online in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", (education.onlineCourses[online].title));
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", (education.onlineCourses[online].school));
        var formattedonlineDates = HTMLonlineDates.replace("%data%", (education.onlineCourses[online].dates));
        var formattedonlineURL = HTMLonlineURL.replace("%data%", (education.onlineCourses[online].url));
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDates,formattedonlineURL);
    }
}



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
        "description": "Creating Tables, Lists, Figures and Graphs while conforming to ADam and SDTM coding standards"
    }
    ]
}
function displayWork() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].jobPosition);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}


var projects = {
    "projects": [
    {
        "title": "Portfolio",
        "dates": "2017",
        "description": "Portfolio of projects that I have built as part of Udacity Nanodegree program.",
        "images": ["images/197x148.gif"]
    }
    ]
}
projects.display = function () {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        // Incase if there are multiple images for a project

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}


// Resume sections displayed

bio.display();
education.display();
displayWork();
projects.display();










// Internationalize Names

// function inName(name) {
//     name =  name.trim().split(" ");
//     name[0] = name[0].slice(0,1).toUpperCase() +
//     name[0].slice(1).toLowerCase();
//     name[1] = name[1].toUpperCase();

// return name[0] +" "+ name[1];
// }
// $("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);












































