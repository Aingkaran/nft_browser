# Aingkaran's NFT Browser - LIVE DEMO CLICK BELOW
[LIVE DEMO](https://aingkaran.github.io/nft_browser/)

### Test Addresses:
    0x1D9bBE22C3710676214C96191E7fDF7Ae067EB4a
    0xd1816C9283e623663ea5a96f2435e565F627d1F1

## General Comments
    Fun project used Alchemy's SDK to pull NFT token data from users Ethereum Address.
    Used material UI for styling and React components to organize my code. 
    Used React Testing Library and Jest to test code. 
## Dependencies
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "@mui/icons-material": "^5.11.11",
    "@mui/joy": "^5.0.0-alpha.70",
    "@mui/material": "^5.11.12",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "alchemy-sdk": "^2.6.0",
    "dotenv": "^16.0.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"

## Requirement 
### 1. NFTs displayed as a grid of cards, each card displaying the NFT details
![nft browser full](https://user-images.githubusercontent.com/66233482/223938629-ea680789-a660-44f7-9940-8bf141a1a3db.JPG)

### 2. Modal After NFT is clicked
![modal](https://user-images.githubusercontent.com/66233482/223936323-18bbc21c-19c4-4634-8a68-fede064d1cc6.JPG)

### 3. Purchase Button Navigates to OpenSea page
![opensea page](https://user-images.githubusercontent.com/66233482/223936925-0e9621ff-7863-4264-bf2c-ca6b222d61b6.JPG)

### 4. Visually appealing and easy to use &#9745; &#9745;

## ERROR Handling
I have an alert set up for the user incase they submit an ethereum address that is not in the right format.
![errorhandling](https://user-images.githubusercontent.com/66233482/223952383-026f31d6-056d-480d-a1b2-cb8f850cc269.JPG)


## Testing
Testing done on the input. Checked whether the input value was stored in the correct variable. 

![testcase](https://user-images.githubusercontent.com/66233482/223938214-4b936f7f-9714-4cdf-a265-2732027ba706.JPG)

### Test Result
![test](https://user-images.githubusercontent.com/66233482/223938300-1be3ea2c-f6fb-46a1-892f-c0f469859a93.JPG)

## Mobile Friendly?...YES!
![mobileBrowse](https://user-images.githubusercontent.com/66233482/223943345-93bf9c4a-6c9b-41aa-9753-8a0e7811ba7b.JPG)
![mobileModal](https://user-images.githubusercontent.com/66233482/223943356-d8952c39-c836-4dfe-a550-b66b8110bb3b.JPG)

## Improvements
### With additional time I would make the following improvements:
    -more testing parameters" ,
    -more details in the modal page. I would like to see if I can get more of the key properties of the NFTs to be displayed nicely",
    -some of the pages go to an openSea page that's not valid anymore. I would like to see if I can catch that error or display that warning before the user clicks the buy button
    
