// JSON for Nested data

var bio = {
    "name": "Rishad Yamnoor",
    "role": ["Web Developer, UI Designer"],
    "contacts": {
        "mobile": "966-323-9799",
        "email": "rishad.yammnoor@gmail.com",
        "twitter": "@EvolofThings",
        "github": "evolofthings",
        "location": "Bengaluru"
    },
    "bioPic": "images/WhatsAppDP.jpeg",
    "welcomeMsg": "Bringing futuristic ideas to reality",
    "skills": ["HTML", "CSS", "JavaScript", "git", "JQuery", "Ajax"],
};


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
        "url": "www.udacity.com"
    },
    {
        "school": "Free Code Camp",
        "title": "MOOC Platform",
        "dates": 2016,
        "url": "www.freecodecamp.com"
    }
    ]
}


var work = {
    "workPlace": [
    {
        "jobPosition": "Web Developer",
        "employer": "Freelance",
        "years": 0.3,
        "city": "Remote",
        "description": "Built websites for clients who hired me through freelance working sites"
    },
    {
        "jobPosition": "Clinical SAS Programmer trainee",
        "employer": "Rang Technologies",
        "years": "Oct 2015 to Feb 2016",
        "city": "Piscataway, NJ, US",
        "description": "Creating Tables, Lists, Figures and Graphs while conforming to ADam and SDTM coding standards"
    }
    ]
}


var projects = {
    "projects":
    {
        "title": "Portfolio",
        "dates": "2017",
        "description": "Portfolio of projects that I have built as part of Udacity Nanodegree program.",
        "images": "https://github.com/EvolOfThings/Udacity-Front-End-Nanodegree/blob/master/images/app1.jpg"
    }
}

// PROJECTS
$("#projects").append(HTMLprojectStart);
$("#projects").append(HTMLprojectTitle.replace("%data%", projects.projects.title));
$("#projects").append(HTMLprojectDates.replace("%data%", projects.projects.dates));
$("#projects").append(HTMLprojectDescription.replace("%data%", projects.projects.description));
$("#projects").append(HTMLprojectImage.replace("%data%", projects.projects.images));



// BIO
$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
// $("#header").append(HTMLheaderRole.replace("%data%", bio.role[1]));
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
$("#header").append(HTMLskillsStart);
$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[4]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[5]));


// EDUCATION
$("#education").append(HTMLschoolStart);
$(".education-entry").append(HTMLschoolName.replace("%data%", (education.schools[0].name)));
$(".education-entry").append(HTMLschoolDegree.replace("%data%", (education.schools[0].degree)));
$(".education-entry").append(HTMLschoolDates.replace("%data%", (education.schools[0].dates)));
$(".education-entry").append(HTMLschoolLocation.replace("%data%", (education.schools[0].location)));
$(".education-entry").append(HTMLschoolMajor.replace("%data%", (education.schools[0].major[0])));
$(".education-entry").append(HTMLschoolName.replace("%data%", (education.schools[1].name)));
$(".education-entry").append(HTMLschoolDegree.replace("%data%", (education.schools[1].degree)));
$(".education-entry").append(HTMLschoolDates.replace("%data%", (education.schools[1].dates)));
$(".education-entry").append(HTMLschoolLocation.replace("%data%", (education.schools[1].location)));
$(".education-entry").append(HTMLschoolMajor.replace("%data%", (education.schools[1].major[0])));

$(".education-entry").append(HTMLonlineClasses);
$(".education-entry").append(HTMLonlineTitle.replace("%data%", (education.onlineCourses[0].title)));
$(".education-entry").append(HTMLonlineSchool.replace("%data%", (education.onlineCourses[0].school)));
$(".education-entry").append(HTMLonlineDates.replace("%data%", (education.onlineCourses[0].dates)));
$(".education-entry").append(HTMLonlineURL.replace("%data%", (education.onlineCourses[0].url)));
$(".education-entry").append(HTMLonlineTitle.replace("%data%", (education.onlineCourses[1].title)));
$(".education-entry").append(HTMLonlineSchool.replace("%data%", (education.onlineCourses[1].school)));
$(".education-entry").append(HTMLonlineDates.replace("%data%", (education.onlineCourses[1].dates)));
$(".education-entry").append(HTMLonlineURL.replace("%data%", (education.onlineCourses[1].url)));


// WORK
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(HTMLworkEmployer.replace("%data%", work.workPlace[0].employer));
$(".work-entry").append(HTMLworkTitle.replace("%data%", work.workPlace[0].jobPosition));
$(".work-entry").append(HTMLworkDates.replace("%data%", work.workPlace[0].years));
$(".work-entry").append(HTMLworkLocation.replace("%data%", work.workPlace[0].city));
$(".work-entry").append(HTMLworkDescription.replace("%data%", work.workPlace[0].description));

$(".work-entry").append(HTMLworkEmployer.replace("%data%", work.workPlace[1].employer ));
$(".work-entry").append(HTMLworkTitle.replace("%data%", work.workPlace[1].jobPosition));
$(".work-entry").append(HTMLworkDates.replace("%data%", work.workPlace[1].years));
$(".work-entry").append(HTMLworkLocation.replace("%data%", work.workPlace[1].city));
$(".work-entry").append(HTMLworkDescription.replace("%data%", work.workPlace[1].description));


// PROJECT


