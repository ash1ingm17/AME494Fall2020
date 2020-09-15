#define LILYGO_WATCH_2019_WITH_TOUCH
#include <LilyGoWatch.h>

TTGOClass *ttgo;

void setup()
{
    Serial.begin(115200);
    ttgo = TTGOClass::getWatch();
    ttgo->begin();
    ttgo->openBL();

    ttgo->tft->fillScreen(TFT_BLUE);
    ttgo->tft->setTextColor(TFT_WHITE, TFT_BLUE);
    ttgo->tft->setTextFont(4);
    ttgo->tft->drawString("Ashling McNeill",  40, 100);
}

void loop()
{ 
}
