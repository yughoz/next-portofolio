import { PortfolioData } from '@/types/portfolio'
import fs from 'fs'
import path from 'path'

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'portfolio.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents) as PortfolioData
  } catch (error) {
    console.error('Error reading portfolio data:', error)
    throw error
  }
}