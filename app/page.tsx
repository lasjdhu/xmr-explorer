import Link from "next/link"
import { ArrowRight, Clock, Database, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function Home() {
  // This would be replaced with actual API calls to fetch Monero blockchain data
  const stats = {
    height: 2845632,
    hashRate: "1.23 GH/s",
    difficulty: "328.45 G",
    medianBlockSize: "35.2 KB",
    lastBlockReward: "0.6 XMR",
    lastBlockTime: "2 minutes ago",
    averageBlockTime: "2 minutes",
    transactions24h: 4231,
    emissionTotal: "18,132,912 XMR",
    circulatingSupply: "18,132,912 XMR",
  }

  // Sample recent blocks data
  const recentBlocks = [
    {
      height: 2845632,
      hash: "8f2bda36f6c5a0e667f2997e8a8cf99a1a2c2ac2b3c9c96b3d0a3a3f0a3a3f0a",
      size: "32.4 KB",
      txCount: 12,
      time: "2 minutes ago",
    },
    {
      height: 2845631,
      hash: "7a1cdb25e5b49f9d56c8a6f6e6b5a4c3b2a1c2a3b4c5d6e7f8a9b0c1d2e3f4a5",
      size: "28.7 KB",
      txCount: 8,
      time: "4 minutes ago",
    },
    {
      height: 2845630,
      hash: "6b2dca36e4d5c6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1",
      size: "41.2 KB",
      txCount: 15,
      time: "6 minutes ago",
    },
    {
      height: 2845629,
      hash: "5c3edb47f5e6d7c8b9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2",
      size: "33.8 KB",
      txCount: 10,
      time: "8 minutes ago",
    },
    {
      height: 2845628,
      hash: "4d4fec58a6f7e8d9c0b1a2d3e4f5c6b7a8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3",
      size: "36.5 KB",
      txCount: 13,
      time: "10 minutes ago",
    },
  ]

  // Sample recent transactions data
  const recentTransactions = [
    {
      hash: "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
      amount: "12.45 XMR",
      fee: "0.0005 XMR",
      time: "3 minutes ago",
    },
    {
      hash: "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3",
      amount: "5.78 XMR",
      fee: "0.0003 XMR",
      time: "5 minutes ago",
    },
    {
      hash: "c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
      amount: "0.92 XMR",
      fee: "0.0002 XMR",
      time: "7 minutes ago",
    },
    {
      hash: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5",
      amount: "23.67 XMR",
      fee: "0.0008 XMR",
      time: "9 minutes ago",
    },
    {
      hash: "e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6",
      amount: "3.14 XMR",
      fee: "0.0003 XMR",
      time: "11 minutes ago",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Monero Blockchain Explorer</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Explore the Monero blockchain - view blocks, transactions, and addresses with complete privacy.
        </p>
        <div className="w-full max-w-md flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search by block height, hash, transaction or address" className="pl-8" />
          </div>
          <Button type="submit">Search</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blockchain Height</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.height.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Last block: {stats.lastBlockTime}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hash Rate</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.hashRate}</div>
            <p className="text-xs text-muted-foreground">Difficulty: {stats.difficulty}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions (24h)</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 3h5v5M8 3H3v5M3 16v5h5M16 21h5v-5" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.transactions24h.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Avg block time: {stats.averageBlockTime}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Circulating Supply</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.circulatingSupply}</div>
            <p className="text-xs text-muted-foreground">Last reward: {stats.lastBlockReward}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="blocks" className="mb-8">
        <TabsList>
          <TabsTrigger value="blocks">Recent Blocks</TabsTrigger>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="blocks">
          <Card>
            <CardHeader>
              <CardTitle>Recent Blocks</CardTitle>
              <CardDescription>The most recently mined blocks on the Monero blockchain.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Height</TableHead>
                    <TableHead>Hash</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Transactions</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentBlocks.map((block) => (
                    <TableRow key={block.height}>
                      <TableCell className="font-medium">
                        <Link href={`/blocks/${block.height}`} className="hover:underline">
                          {block.height}
                        </Link>
                      </TableCell>
                      <TableCell className="font-mono text-xs truncate max-w-[150px]">
                        <Link href={`/blocks/${block.hash}`} className="hover:underline">
                          {block.hash}
                        </Link>
                      </TableCell>
                      <TableCell>{block.size}</TableCell>
                      <TableCell>{block.txCount}</TableCell>
                      <TableCell>{block.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="ml-auto" asChild>
                <Link href="/blocks">
                  View All Blocks
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>The most recent transactions on the Monero blockchain.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hash</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Fee</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((tx) => (
                    <TableRow key={tx.hash}>
                      <TableCell className="font-mono text-xs truncate max-w-[250px]">
                        <Link href={`/tx/${tx.hash}`} className="hover:underline">
                          {tx.hash}
                        </Link>
                      </TableCell>
                      <TableCell>{tx.amount}</TableCell>
                      <TableCell>{tx.fee}</TableCell>
                      <TableCell>{tx.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="ml-auto" asChild>
                <Link href="/tx">
                  View All Transactions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/blocks" className="group">
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Blocks Explorer</CardTitle>
              <CardDescription>Browse all blocks in the Monero blockchain</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                View Blocks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </Link>
        <Link href="/tx" className="group">
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Transactions Explorer</CardTitle>
              <CardDescription>Search and view transaction details</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                View Transactions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </Link>
        <Link href="/stats" className="group">
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Network Statistics</CardTitle>
              <CardDescription>View detailed Monero network statistics</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                View Stats
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </main>
  )
}


