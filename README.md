# Bilingual Bathroom Timer Menu (MakeCode Arcade)

This project provides a simple, accessible, bilingual menu interface for children to track bathroom routines and trigger alarms. Designed with clarity and care, it supports both visual and auditory cues to reinforce habits and independence.

## 🧩 Features

- **Bilingual Menu Options**:  
  Displays three static options in Chinese and English:
  - 吃 / Eat
  - 喝 / Drink
  - 厕所 / Bathroom

- **Cursor Navigation**:  
  Use the **Up** and **Down** buttons to move a green "A" cursor between options.

- **Selection Logging**:  
  Pressing **A** logs the selected option and plays a confirmation sound.

- **Bathroom Timer**:  
  Selecting "吃 / Eat" or "喝 / Drink" starts a 60-minute countdown.  
  Selecting "厕所 / Bathroom" resets the timer and stops any alarm.

- **Alarm Trigger**:  
  After 60 minutes, a looping melody plays for 60 seconds to remind the user to use the bathroom.

- **Manual Alarm**:  
  Press **B** to manually trigger the alarm for training or testing.

- **Alarm Stop**:  
  Press **Right Arrow** to stop the alarm early.  
  A visual cue `"→ Stop Alarm"` appears below the menu while the alarm is active.

- **Countdown Display**:  
  Shows remaining time in minutes and a colored urgency bar:
  - Green: >40 minutes
  - Yellow: 20–40 minutes
  - Red: <20 minutes

- **Device Wake Prevention**:  
  Simulates activity every 30 seconds to prevent device timeout.

## 🎮 Controls

| Button        | Action                          |
|---------------|----------------------------------|
| Up / Down     | Move cursor between menu items   |
| A             | Select item and log event        |
| B             | Manually trigger alarm           |
| Right Arrow   | Stop alarm sound                 |

## 🔊 Alarm Details

- Melody: `"C5 C5 G A G C5 G A"`  
- Tempo: `450 bpm`  
- Duration: 60 seconds via looped playback every 1.3 seconds

## 🧠 Design Goals

- **Accessibility-first**: Simple layout, clear text, and predictable behavior
- **Emotionally supportive**: Reinforces routine with gentle cues
- **Bilingual clarity**: Helps bridge language understanding for children

## 🛠 Platform

Built using [MakeCode Arcade](https://arcade.makecode.com/) in JavaScript.

---

Created with care by Mr. Rogers, for a child’s independence and confidence. 

> Open this page at [https://mrrogersog.github.io/bathroom-trainer/](https://mrrogersog.github.io/bathroom-trainer/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/mrrogersog/bathroom-trainer** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/mrrogersog/bathroom-trainer** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
