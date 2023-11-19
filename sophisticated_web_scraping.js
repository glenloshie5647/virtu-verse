/**
 * Filename: sophisticated_web_scraping.js
 * 
 * This code demonstrates a sophisticated web scraping task using JavaScript. It automates
 * the process of collecting data from a website by performing HTTP requests, parsing HTML,
 * handling pagination, and saving the data to a file.
 *
 * Please note that web scraping may have legal and ethical implications, and it is important
 * to respect website terms of service and seek permission if necessary before engaging in
 * such activities.
 *
 * Author: Your Name
 */

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// Function to extract data from a web page using Cheerio
async function scrapePage(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    // Extracting specific elements
    const titles = [];
    $('.title').each((index, element) => {
      titles.push($(element).text());
    });

    return titles;
  } catch (error) {
    console.error(`Error scraping URL: ${url}`);
    console.error(error);
    return [];
  }
}

// Function to scrape multiple pages by handling pagination
async function scrapePages(baseUrl, totalPages) {
  let scrapedData = [];

  for (let page = 1; page <= totalPages; page++) {
    const url = `${baseUrl}?page=${page}`;
    const pageData = await scrapePage(url);
    scrapedData = scrapedData.concat(pageData);
  }

  return scrapedData;
}

// Main function to orchestrate the web scraping process
async function main() {
  const baseUrl = 'https://www.example.com/data';
  const totalPages = 10;

  const scrapedData = await scrapePages(baseUrl, totalPages);

  // Save the scraped data to a file
  fs.writeFile('scraped_data.txt', scrapedData.join('\n'), 'utf8', (err) => {
    if (err) {
      console.error('Error while saving the scraped data to a file.');
    } else {
      console.log('Scraped data saved successfully.');
    }
  });
}

// Initiate the web scraping process
main();

/**
 * Note: This code is for illustrative purposes only and may require modifications to work
 * properly in a real-world scenario. Also, make sure to review and comply with the target
 * website's terms of service and robots.txt instructions before running any web scraping code.
 */