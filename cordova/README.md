# PWA template generate
````
npm install -g cordova
cordova create .
cd cordova
````




````
cordova platform add android
cordova platform add ios

cp -r build/* ../my-cordova-app/www/
````



````
cordova plugin add cordova-plugin-camera
````

````
cd ../my-cordova-app

cordova build android
cordova build ios

cordova run android
cordova run ios
````



# setting JDK & AOS
````
brew install openjdk@11

~/.zshrc or ~/.bash_profile
export JAVA_HOME=/opt/homebrew/opt/openjdk@11
export PATH=$JAVA_HOME/bin:$PATH
source ~/.zshrc


sdk install via android studio

~/.zshrc or ~/.bash_profile
export ANDROID_HOME=/Users/?/Library/Android/sdk
export ANDROID_SDK_ROOT=$ANDROID_HOME
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH


brew install gradle
~/.zshrc or ~/.bash_profile
export PATH="/opt/homebrew/opt/gradle/bin:$PATH"

````






# spec
````
openjdk version "17.0.11" 2024-04-16
Gradle 8.8

````
