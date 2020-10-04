# PIX

PIX is an app that gets a set of image uri's and displays them in a simple - swipeable image gallery.

## Installation
```bash
clone
npm install
```

#### iOS
```bash
cd ios
pod install
cd ..
react-native run-ios
```

#### Android
```bash
react-native run-android
```

## Configuration
You can customize the app via integration-config.json as follows:
```bash
"lang": "tr", #default language

"api": "api3", #given api

#response 
  *{
        swipers: [
            {
                swiper: {
                    image_set: [
                        { image_url: 'https://via.placeholder.com/800x800/8EBD37' },
                        { image_url: 'https://via.placeholder.com/800x800/5C7A23' },
                        { image_url: 'https://via.placeholder.com/800x800/BCFA48' },
                        { image_url: 'https://via.placeholder.com/800x800/2C3B11' },
                        { image_url: 'https://via.placeholder.com/800x800/A9E042' },
                    ]
                }
            }
        ]
    }*
    
#for handling the response above
"pathWayForImageSet": {  
   "root": "swipers",
   "each": "swiper",
   "set": "image_set",
   "prop": "image_url"
}

#changing gallery position
#attention: position settings will be ignored if there are multiple image sets.
"position": {
   "vertical": "top", #other options: middle, bottom
   "horizontal": "middle" #other options: left, right
}

#changing gallery size
"swiperStyles": {
        "width": "100%", #or in dp
        "height": 300 #or in percentage
}
```
