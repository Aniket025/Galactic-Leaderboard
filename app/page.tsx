'use client'

import { tournaments } from '../data';
import { motion } from 'framer-motion';
import { Card, CardBody, Chip, Divider } from "@nextui-org/react";
import { 
  IconTrophy, 
  IconUsers, 
  IconCricket,
  IconCalendar,
  IconStarFilled,
  IconChartBar
} from '@tabler/icons-react';
import { WicketIcon } from './components/WicketIcon';

const TeamColorMap = {
  'Team Galactic': 'warning',
  'Illuminati': 'secondary',
  'Celestial': 'success'
} as const;

const monthOrder = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

function getMonthFromString(dateStr: string): number {
  for (let i = 0; i < monthOrder.length; i++) {
    if (dateStr.toLowerCase().includes(monthOrder[i].toLowerCase())) {
      return i;
    }
  }
  // For strings like "Dec 24 Jan 25", prioritize the first month mentioned
  const months = monthOrder.map(month => month.toLowerCase());
  const words = dateStr.toLowerCase().split(/\s+/);
  for (const word of words) {
    const monthIndex = months.findIndex(month => word.includes(month));
    if (monthIndex !== -1) return monthIndex;
  }
  return -1;
}

function getMonthFromTournament(tournament: typeof tournaments[0]): number {
  if (tournament.date) {
    return getMonthFromString(tournament.date);
  }
  // If no date field, extract month from series name
  return getMonthFromString(tournament.seriesName);
}

export default function Home() {
  const groupedTournaments = tournaments.reduce((acc, tournament) => {
    const year = tournament.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(tournament);
    return acc;
  }, {} as Record<string, typeof tournaments>);

  // Sort tournaments within each year by date (latest first)
  Object.keys(groupedTournaments).forEach(year => {
    groupedTournaments[year].sort((a, b) => {
      const monthA = getMonthFromTournament(a);
      const monthB = getMonthFromTournament(b);
      if (monthA === monthB) {
        // If months are the same, check if one is a "Grand" series
        const isGrandA = a.seriesName.toLowerCase().includes('grand');
        const isGrandB = b.seriesName.toLowerCase().includes('grand');
        if (isGrandA && !isGrandB) return -1;
        if (!isGrandA && isGrandB) return 1;
        return 0;
      }
      return monthB - monthA;
    });
  });

  const years = Object.keys(groupedTournaments).sort((a, b) => b.localeCompare(a));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <IconChartBar className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Galactic Leaderboard
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-600">
            Tracking excellence in our cricket tournaments
          </p>
        </motion.div>

        {years.map((year) => (
          <motion.div
            key={year}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
              <IconCalendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
              {year}
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {groupedTournaments[year].map((tournament, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="w-full hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4">
                        {/* Title Section */}
                        <div className="md:col-span-3 bg-gradient-to-r from-blue-500 to-purple-500 p-4 sm:p-6 flex flex-col justify-center">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                              {tournament.seriesName}
                            </h3>
                          </div>
                          {tournament.date && (
                            <p className="text-white/80 text-sm mt-2">{tournament.date}</p>
                          )}
                        </div>

                        {/* Details Section */}
                        <div className="md:col-span-9 p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                              <div className="p-2 rounded-full bg-blue-100">
                                <IconUsers className="h-5 w-5 text-blue-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-gray-500">
                                  {tournament.winningSet ? 'Winning Set' : 'Captain'}
                                </p>
                                <p className="font-medium text-gray-900 truncate">
                                  {tournament.winningSet ? 
                                    tournament.winningSet.join(", ") : 
                                    tournament.captain
                                  }
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <p className="text-sm text-gray-500 mb-1">Team</p>
                              <Chip
                                size="lg"
                                variant="flat"
                                color={TeamColorMap[tournament.team as keyof typeof TeamColorMap] || 'default'}
                              >
                                {tournament.team}
                              </Chip>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                            {/* MVP */}
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-yellow-100">
                                <IconStarFilled className="h-5 w-5 text-yellow-600" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">MVP</p>
                                <p className="font-medium text-gray-900">{tournament.mvp}</p>
                              </div>
                            </div>

                            {/* Best Batsman */}
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-purple-100">
                                <IconCricket className="h-5 w-5 text-purple-600" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Best Batsman</p>
                                <p className="font-medium text-gray-900">{tournament.bestBatsman}</p>
                              </div>
                            </div>

                            {/* Best Bowler */}
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-green-100">
                                <WicketIcon className="h-5 w-5 text-green-600" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Best Bowler</p>
                                <p className="font-medium text-gray-900">{tournament.bestBowler}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
} 