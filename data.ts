interface Tournament {
  seriesName: string;
  captain: string;
  team: string;
  mvp: string;
  bestBatsman: string;
  bestBowler: string;
  date?: string;
  year: string;
  winningSet?: string[];
  bestUmpire?: string;
}

interface WeekdayTournament {
  seriesName: string;
  period: string;
  winner: string;
  wins: number;
  total: number;
  winPercentage: string;
  mvp: string;
  bestBatsman: string;
  bestBowler: string;
  year: string;
}

export const tournaments: Tournament[] = [
  {
    seriesName: "Feb Tri Series",
    captain: "Sudhanshu",
    team: "Team Galactic",
    mvp: "Sudhanshu",
    bestBatsman: "Gaurav",
    bestBowler: "Krishna",
    year: "2024",
    date: "February 2024"
  },
  {
    seriesName: "March Tri Series",
    captain: "Mody",
    team: "Team Galactic",
    mvp: "Subbu",
    bestBatsman: "Subbu",
    bestBowler: "Mody",
    year: "2024",
    date: "March 2024"
  },
  {
    seriesName: "March Tri Series 2",
    captain: "Prashant",
    team: "Illuminati",
    mvp: "Aniket",
    bestBatsman: "Aniket",
    bestBowler: "Bhavya Sikka",
    year: "2024",
    date: "March 2024"
  },
  {
    seriesName: "Grand tri series March",
    captain: "Sudhanshu",
    team: "Team Galactic",
    mvp: "Abhishek P.",
    bestBatsman: "Abhishek P.",
    bestBowler: "Chirag",
    year: "2024",
    date: "March 2024"
  },
  {
    seriesName: "May Tri Series",
    captain: "Chirag",
    team: "Illuminati",
    mvp: "Aniket",
    bestBatsman: "Madhav",
    bestBowler: "Aniket",
    year: "2024",
    date: "May 2024"
  },
  {
    seriesName: "June Tri Series",
    captain: "Prerit",
    team: "Celestial",
    mvp: "Prerit",
    bestBatsman: "Prerit",
    bestBowler: "Chirag",
    year: "2024",
    date: "June 2024"
  },
  {
    seriesName: "July Tri Series",
    captain: "Sanskar",
    team: "Celestial",
    mvp: "Nishant",
    bestBatsman: "Aniket",
    bestBowler: "Nishant",
    year: "2024",
    date: "July 2024"
  },
  {
    seriesName: "July Grand Tri Series",
    captain: "Chirag",
    team: "Celestial",
    mvp: "Tanuj",
    bestBatsman: "Tanuj",
    bestBowler: "Bhavya Sikka",
    year: "2024",
    date: "July 2024"
  },
  {
    seriesName: "August Quads monthly series",
    captain: "Arpit",
    team: "Illuminati",
    mvp: "Aniket",
    bestBatsman: "Sudhanshu",
    bestBowler: "Aniket",
    year: "2024",
    date: "August 2024"
  },
  {
    seriesName: "Sep Tri Series",
    captain: "Aniket",
    team: "Team Galactic",
    mvp: "Aniket",
    bestBatsman: "Prerit",
    bestBowler: "Aniket",
    year: "2024",
    date: "September 2024"
  },
  {
    seriesName: "Nov Tri Series",
    captain: "Sidharth S.",
    team: "Celestial",
    mvp: "Aniket",
    bestBatsman: "Aniket",
    bestBowler: "Prerit",
    year: "2024",
    date: "November 2024"
  },
  {
    seriesName: "Dec grand tri series",
    captain: "Sidharth S.",
    team: "Celestial",
    mvp: "Chirag",
    bestBatsman: "Prashant",
    bestBowler: "Sudheer",
    year: "2024",
    date: "December 2024"
  },
  {
    seriesName: "Jan 25 Tri Series",
    captain: "Gaurav",
    team: "Celestial",
    mvp: "Sudhanshu",
    bestBatsman: "Sudhanshu",
    bestBowler: "Prakhar",
    date: "January 2025",
    year: "2025",
    winningSet: ["Gaurav(c)", "Arpit", "Tanuj", "Aniket"]
  },
  {
    seriesName: "Feb 25 Tri Series",
    captain: "Arpit",
    team: "Team Galactic",
    mvp: "Aniket",
    bestBatsman: "Arnab",
    bestBowler: "Prerit",
    date: "February 2025",
    year: "2025",
    winningSet: ["Arpit(c)", "Prashant", "Aniket"]
  },
  {
    seriesName: "April 25 Tri Series",
    captain: "Chirag",
    team: "Celestial",
    mvp: "Prakhar",
    bestBatsman: "Mayank",
    bestBowler: "Prakhar",
    date: "April 2025",
    year: "2025",
    winningSet: ["Chirag(c)", "Prakhar", "Samriddh", "Sudheer"]
  },
  {
    seriesName: "May 2025 Grand Tri Series",
    captain: "Gaurav",
    team: "Illuminati",
    mvp: "Samriddh",
    bestBatsman: "Arnab",
    bestBowler: "Samriddh",
    date: "May 2025",
    year: "2025",
    winningSet: ["Gaurav(c)"]
  },
  {
    seriesName: "May 2025 Tri Series",
    captain: "Samridhh",
    team: "Celestial",
    mvp: "Mayank",
    bestBatsman: "Mayank",
    bestBowler: "Aniket",
    date: "May 2025",
    year: "2025",
    winningSet: ["Samridhh(c)", "Bhavya", "Bhanu", "Arnab"]
  },
  {
    seriesName: "June 2025 Tri Series",
    captain: "Arijit",
    team: "Illuminati",
    mvp: "Aniket",
    bestBatsman: "Aniket",
    bestBowler: "Chirag",
    date: "June 2025",
    year: "2025",
    winningSet: ["Arijit(c)", "Prerit", "Kushagra", "Chirag"]
  },
  {
    seriesName: "July 2025 Tri Series",
    captain: "Nishant",
    team: "Illuminati",
    mvp: "Aniket",
    bestBatsman: "Aniket",
    bestBowler: "Tanuj",
    date: "July 2025",
    year: "2025",
    winningSet: ["Nishant(c)", "Prerit", "Aniket", "Ayush"],
    bestUmpire: "Prashant"
  },
  {
    seriesName: "August Tri Series",
    captain: "Sudhanshu",
    team: "Celestial",
    mvp: "Aniket",
    bestBatsman: "Mayank",
    bestBowler: "Aniket",
    date: "August 2025",
    year: "2025",
    winningSet: ["Sudhanshu(c)", "Aniket", "Mayank", "Krishna"],
    bestUmpire: "Prerit"
  },
  {
    seriesName: "Grand Tri Series Sep 2025",
    captain: "Arijit",
    team: "Illuminati",
    mvp: "Mayank",
    bestBatsman: "Aniket",
    bestBowler: "Prakhar",
    date: "September 2025",
    year: "2025"
  },
  {
    seriesName: "Sep - Oct Tri Series 2025",
    captain: "Prakhar",
    team: "Celestial",
    mvp: "Karan",
    bestBatsman: "Karan",
    bestBowler: "Devang",
    date: "September - October 2025",
    year: "2025",
    winningSet: ["Prakhar(c)", "Sudhanshu", "Chirag"]
  },
  {
    seriesName: "Nov Tri Series 2025",
    captain: "Konark",
    team: "Celestial",
    mvp: "Aniket",
    bestBatsman: "Aniket",
    bestBowler: "Aniket",
    date: "November 2025",
    year: "2025",
    winningSet: ["Konark(c)", "Nishant Tomar", "Aniket"]
  },
  {
    seriesName: "One Day Bhaiya Tri Series Jan 2026",
    captain: "Sudhanshu",
    team: "Team Galactic",
    mvp: "Aniket",
    bestBatsman: "Devang",
    bestBowler: "Prajwal",
    date: "January 2026",
    year: "2026"
  },
  {
    seriesName: "Jan Dulha Tri Series 2026",
    captain: "Prerit",
    team: "Celestial",
    mvp: "Prerit",
    bestBatsman: "Sudhanshu",
    bestBowler: "Mayank",
    date: "January 2026",
    year: "2026",
    winningSet: ["Prerit(c)", "Prashant", "Rahul", "Arpit"]
  },
  {
    seriesName: "Feb Tri Series 2026",
    captain: "Devang",
    team: "Team Galactic",
    mvp: "Prakhar",
    bestBatsman: "Tomar",
    bestBowler: "Prajwal",
    date: "February 2026",
    year: "2026",
    winningSet: ["Devang(c)", "Prerit", "Konark", "Siddharth A"]
  },
  {
    seriesName: "Dec 24 Jan 25 Tri series",
    captain: "Prashant",
    team: "Celestial",
    mvp: "Aniket",
    bestBatsman: "Karan",
    bestBowler: "Krishna",
    date: "January 2025",
    year: "2025",
    winningSet: ["Prashant(c)", "Aniket", "Karan", "Krishna"]
  }
];

export const weekdayTournaments: WeekdayTournament[] = [
  {
    seriesName: "Series 1",
    period: "April - May",
    winner: "Prashant",
    wins: 9,
    total: 12,
    winPercentage: "75%",
    mvp: "Karan",
    bestBatsman: "Prashant",
    bestBowler: "Kushagra",
    year: "2025"
  },
  {
    seriesName: "Series 2",
    period: "May - June",
    winner: "Karan",
    wins: 8,
    total: 12,
    winPercentage: "66.6%",
    mvp: "Prashant",
    bestBatsman: "Tanuj",
    bestBowler: "Karan",
    year: "2025"
  },
  {
    seriesName: "Series 3",
    period: "June - July",
    winner: "Kushagra",
    wins: 8,
    total: 10,
    winPercentage: "80%",
    mvp: "Aniket",
    bestBatsman: "Prashant",
    bestBowler: "Aniket",
    year: "2025"
  },
  {
    seriesName: "Series 4",
    period: "August",
    winner: "Yash",
    wins: 9,
    total: 12,
    winPercentage: "75%",
    mvp: "Aniket",
    bestBatsman: "Nihal",
    bestBowler: "Prashant",
    year: "2025"
  },
  {
    seriesName: "Series 5",
    period: "September",
    winner: "Prerit",
    wins: 0,
    total: 0,
    winPercentage: "0%",
    mvp: "Aniket",
    bestBatsman: "Aniket",
    bestBowler: "Prakhar",
    year: "2025"
  }
]; 