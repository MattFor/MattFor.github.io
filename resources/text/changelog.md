# Changelog

## [Private_release]

### Goals

- Get the bot to be fully stable and ready for mass publishing around 2022

## [7.4.1] - 2021-09-05

### Added

- All base files

## [7.4.1A1] - 2021-09-05

### Changed

- VoiceFactory.js, replaced instances of string assigned to variable on line 37 with the variable name
- After finishing the recording the saved file is now deleted
- Updated gitignore to ignore logs/ folder

### Changed

- Changed how permissions are displayed to prevent just "." from displaying in the guildMemberUpdate

## [7.4.1A2] - 2021-09-06

### Fixed

- Fixed Join/Leave logs in `Utilities.js` (line 295)

## [7.4.1A3] - 2021-09-06

### Upgraded

- Getters for channels, members, roles and users in `Utilities.js` (line 133)

### Planned changes

- Remaking leveling in Handler.js (line 97) [COMPLETED]

## [7.4.2] - 2021-09-07

### Rewrote

- Leveling in `Handler.js` (line 97) (Planned from last version [7.4.1A3])

### Updated

- `Devlog.ini` to feature all changes from this file up to this point

## [7.4.2A1] - 2021-09-07 22:23

### Fixed

- `messageUpdate.js` breaking when a message without a previous image had one added (line 25;119)
- `buy.js` (line 49) and `lvl.js` (line 38), removed `this.` before `client` so that it doesn't make the programs not start at all now!
- error in calculating the guild rank caused by using an await in Promise.all() function (line 210;76) in `Handler.js`

## [7.4.2A2] - 2021-09-07 23:49

### Added

- check to see whether first input is a number in `modlogoptions.js` (line 63) so it doesn't error all the time when just typing the command

## [7.4.2A3] - 2021-09-08 18:23

### Changed

- `_calculateGuildRank()` in `ProfileManager.js` (line 233), now uses less input variables

### Fixed

- leveling now correctly displays rank information in Handler.js **(in other files the variable wasnt dynamically changed thus didin't need to be saved before fetching)**

## [7.4.2A4] - 2021-09-09 09:12

### Removed

- Hidden rate limiter in message.js

## [7.4.3] - 2021-09-11 23:59

### Changed

- Heartboard posts now show images and every other file type separately instead of image and video only `Mainfactory.js` - `HeartBoardPostEmbed()`

### Fixed

- The function showing guild rank in `=lvl` and in leveling in `Handler.js`

## [7.5.0] - 2021-09-16-17 00:00

### Added

- `=warn`
- 4 more hug gifs, 1 more pat gif for `=pat` and `=hug`

### Changed

- `Server.js` default player option "safe search" default is now **True** (line 169)
- Static value of 2 in `RelaxyManager.js` now changed to dynamic shard number from `key.ini` (line 641)
- The code of slash command activation in `Client.js`
- Completely rewrote leveling in `Handler.js`
- The way I make `=devlog` changes made
- All `await client.save` in the code to just `client.save`

### Updated

- The look of `=warnings`
- `=thanks` (credits.ini)
- `server_join.ini` in assets/configuration
- `help_special_exceptions.ini` in assets/configuration

### Optimized

- `_calculateGuildRank()` in `ProfileManager.js`
- The event choosing in for the **voiceStateUpdate** event

### Fixed

- Heartboardpost creation in `Mainfactory.js` (line 37)
- Link in `=invite` to invite Relaxy has added permission for **/** commands
- `=leavevc` has a new _=dc_ alias
- `=spank` now works
- Weird file name inaccuracies -`Handler.js` (line 387) added [0] to the **indexOf(`${user_bans_split[0]}**

### Removed

- Logging of the Relaxy role id in `Handler.js` (line 431) (also in the blueprint of the Guild database Mongoose Document [line 154])
- All remaining logs so they don't clog up the repo in logs/

## [8.0.0A1] - 2021-10-09 23:39

### Fixed

- The ability to play files
- How files are displayed on =song

### Upcoming

- i will be able to write detailed explanations in the resposes from =request

## [8.0.0A2] - 2021-10-10 21:04

### Fixed

- =cmm usage in =help cmm saying "usage: =cmmm"
- =buy not responding when saying f.e =buy w e
- =privatechannel not working
- relaxy not being able to search spotify songs along with reverbnation, facebook and some more

### Upcoming

- i will be able to write detailed explanations in the resposes from =request

## [8.0.0A3] - 2021-10-15 10:33

### Upgraded

- =lookup

### Upcoming

- i will be able to write detailed explanations in the resposes from =request
- i will fix =goto and /goto

## [8.0.0A3] - 2021-10-16 00:04

### Fixed

- =skip (not the slash command) no longer requires a number input to work
- =play and /play now work when adding a track when the queue is already running (lmao)
- Relaxy! no longer emmits "queue ended" and "channel empty" at the same time
- the internal equivalent of the /stats that shows how many users are actively using the bot / memory usage stuff
  and active queues along with the process uptime has been fixed so it works now, lol

### Upcoming

- i will be able to write detailed explanations in the resposes from =request
- i will fix =goto and /goto

## [8.0.0A4] - 2021-10-19 16:43

### Fixed

- =warn
- some internal console improvements

### Upcoming

- i will be able to write detailed explanations in the resposes from =request
- i will fix =goto and /goto

## [8.0.1] - 2021-10-23 18:00

### Added

- /goto

### Fixed

- =warn not responding on first warn despite actually logging the warning
- =goto was out of the game but now it's back fully working although the waiting time is still long
- playererror resource ended shouldn't happen now

### Upcoming

- i will be able to write detailed explanations in the resposes from =request

## [8.0.2] - 2021-11-05 22:00

### Added

- =goto + /goto
- =request now should in big quotes, work properly

### Fixed

- "queue ended" message not showing up
- updated modules causing you to be unable to play music on your bot

## [8.0.3] - 2021-11-13 01:30

### Fixed

- "[PlayerError] Resource has already ended." is gone forever, reduced to atoms, enjoy the music while it is not yet broken!### Security

### Upcoming

- i will be able to write detailed explanations in the resposes from =request

## [8.0.3A1] - 2021-11-13 02:40

### Added

- full queue time on =queue and /queue

### Fixed

- =p and /play now plays playlists

### Upcoming

- i will be able to write detailed explanations in the resposes from =request

## [8.0.3A2] - 2021-11-15 22:58

### Added

- buffering cooldown in relaxy music options, default 1300, how much time before music starts playing after typing the command, gives it time to process correctly, recommended about 2000-3000

### Fixed

- music quality being subpar
- slash commands sometimes failing

### Upcoming

- i will be able to write detailed explanations in the resposes from =request
- a bugged response "error 503" has been identified and i'm working on resolving that!
- filters being readded
- having a separate version of the bot to work on

## [8.0.4] - 2021-11-16 16:40

### Added

- Total queue time to =queue and /queue
- buffering cooldown in relaxy music options, default 1300, how much time before music starts playing after typing the command, gives it time to process correctly, recommended about 2000-3000

### Changed

- =queue and /queue now shows 6 songs per page (feature not bug i swear)

### Fixed

- /shuffle and =shuffle not actually shuffling the second song in the queue
- resource ended message on music
- /queue and =queue no longer cuts the second track in queue
- music quality being subpar
- slash commands sometimes failing

### Upcoming

- i will be able to write detailed explanations in the resposes from =request
- a bugged response "error 503" has been identified and i'm working on resolving that!
- filters being readded
- having a separate version of the bot to work on

## [8.0.6A1] - 2021-12-26 04:00

### Fixed

- /volume now works
- /play and =play now properly work with non-youtube playlists :P
- /play and =play now properly play after starting, searchign for
  a track with no results, then trying to play something else
- =request now fully works, can provide a response
- [A1] =play and /play now correctly plays single songs inside playlist
- [A2] =play and /play now correctly play a single playlist song when added to queue

### Changed

- [Mk3&Mk4] internal code optimizations and changes

### Upcoming

- =graph display a mathematical equation graphically
- voice recording back in the bot

### Known Issues

- sometimes when playing music, after a song ends the bot doesn't play
  another one and dies [Don't know what causes this yet]
- user count keeps ticking up over time for some reason

## [8.0.7] - 2022-01-05 10:47

### Changed

- almost all files in the bot updated to new standard.

### Fixed

- =repeat and /repeat now work properly.
- [Mk1] console command to display servers works properly now.
- [Mk2] Music randomly stopping during playlists should be fixed now.

### Removed

- removed some internal loggers.

### Upcoming

- =graph display a mathematical equation graphically
- voice recording back in the bot

### Known Issues

- sometimes when playing music, after a song ends the bot doesn't play
  another one and dies [~~Don't know what causes this yet~~] (Seemingly fixed)
- user count keeps ticking up over time for some reason (it's like off by 5 from the actual count)

## [8.0.8] - 2022-01-24 00:26

### Progress

- [Mk1] (2022-01-24 11:05) cleaned up voice recording files, preparing to implement it sometime soon

### Updated

- [Mk1] (2022-01-24 11:05) all occurences of setFooter and setAuthor have been updated to new discord.js standards

### Fixed

- optimized welcome message handling
- =mute now works properly

### Upcoming

- =graph display a mathematical equation graphically
- voice recording back in the bot

### Known Issues

- sometimes when playing music, after a song ends the bot doesn't play
  another one and dies [~~Don't know what causes this yet~~] (Seemingly fixed)
- user count keeps ticking up over time for some reason (it's like off by 5 from the actual count)

## [8.0.9] - 2022-02-05 20:49

### Progress

- cleaned up voice recording files, preparing to implement it sometime soon

### Fixed

- [Mk1] (2022-02-06 22:55) =play now works properly when playing attachment from link
- =lyrics now should function properly

### Known Issues

- sometimes when playing music, after a song ends the bot doesn't play
  another one and dies [~~Don't know what causes this yet~~] (Seemingly fixed)
- user count keeps ticking up over time for some reason (it's like off by 5 from the actual count)

## [8.1.0] - 2022-10-27 18:30

### Progress

- Relaxy is alive again!
- Relaxy's support server is also alive again! Get on with =invite!
- Internal files have been renamed to their actual specifications

### Fixed

- Welcome messages constantly changing back and forth after being edited
- Leveling is now completely fixed
- =preview not working with titles
- =play not working has been fixed
- =snake had too much redundant code
- =rep+ now works on Relaxy himself
- =image is now working properly
- Inventory managing has been fixed

### Changed

- In all embed making commands to have a newline type ~= instead of just = (broke embedded links)

### Upcoming

- Overhaul and general fixing of image related commands
- Fixing =search =lockdown =remindme =reminds as well as =translate
- Adding =graph
- Generally removing and merging redundant commands as well as making more / commands
- Possibly readding voice recording
- Adding permissions that show when doing =roleinfo

### [9.0.0] 2022-11-19 21:00

### Progress

- Now running on the latest nodeJS version v19.0.0
- Relaxy updated to discord.js v14.6.0
- Most commands received a / version
- Music player updated
- =image updated
- Massive refactoring of basically everything
- Standardized time formatting and embed formatting across the code

### Recoded

- Everything to do with custom embeds
- Internal modlog code
- Internal slash command code
- Upgraded the music module

### Added

- error when trying to play live videos
- =reddit | Search Your favourite subreddit for a random post!
- =search | choose the song you want!
- / command options for all music commands commands.

### Removed

- =censoradd (merged with =censor)
- =wmreactedit (merged with =wmreact)
- =removeprefix, =changeprefix (merged with NOW RENAMED =addprefix -> =prefix)
- =rtime renamed to =ping
- "uwu" from =spank description

### Upcoming

- More slash command with the following update each category will
  receive a full suite of / commands

### [9.1.0] 26-11-2022 23:10

### Fixed

- [9.1.1Mk1] Member Updated modlog event role change / status change fixed
- [Mk2] -> [9.1.1] requests
- [Mk2] Message Edited modlog event
- =disablecommand not displaying a returning message
- =redirect not working
- =leveling not actually saving to the database
- / commands having weird interactions with music
- some internal functions and optimizations
- =request is now working properly

### Removed

- =graph
- =decimate (now =remake)
- =throw (now =disconnect)

### Added

- [Mk1] =mutes
- / command for =throw (now =disconnect)
- some other command I forgot the name of

### Improved

- =request now shows what server the message came from
- all embed making functions will now catch errors better

### [9.2.0] 14-12-2022 1:03

### Progress

- added HOT RELOADING! no more massive Relaxy downtimes when it's being worked on!
- many internal code improvements and more to come

### Fixes

- =help now can accept upper case command names
- =request fixed and updated
- =leaderboard updated
- =redirect now works
- =remake now works
- =warn now works
- =lyrics now doesn't delete a message, instead it updates the one it sent
- many modlog event improvements and more to come

### Upcoming Changes

- =help will have pages to look through
- =modlogoptions overhaul

### [10.0.0] 04-02-2023 00:00

### Progress

- member/channel/user/role search algorithm _significantly_ improved
- every single interaction possible made more clear to the user
- internal code optimizations to the extreme
- most command that had the ability to add people to some sort of list
  now are able to display those people/roles by doing the command with no arguments

### Improved

- Relaxy sharding manager has been significantly improve [+ added console color but that's for me :)]
- music player compression algorithm improved
- =except -> =exempt fixed typo and improved the command
- =redirect fixed it and added forum functionality
- =unmute made easier to use
- =lockdown made easier to use
- =censor works better
- =help command interface improved
- =lovemeter fixed
- =clearchannel works better now
- heartboards now give a link to the original message whenever possible
- Relaxy will not say 2 things at once when leaving the channel after playing music

### Added

- =autorole - add role(s) to a user exactly when they join
- =user - make only selected people/roles able to use Relaxy
- =forum - make your own moderation forum [very sophisticated, check out the help page]
- =getemoji - get any custom emoji/sticker as a gif
- warning when playing age restricted yt videos

### Removed

- =cleanse -> =clean all
- =unbind -> =restrict unbind
- =disablecommand -> =disable

### Internal

- CrashHandler -> EventManager
- debug logging for music player
- improved ChannelDelete

### Upcoming

- merge =reminds and =remindme
- improve music player
- fix every bug that comes up
- making it so age restricted videos are able to be player
- fixing the mysterious 'aborted' error that happens at random when playing music
- whatever is suggested

### [11.0.0] 11-02-2023 02:00

### Progress

- Relaxy is now supported on Patreon and will try to stay up as much as possible 24/7
- ready for mass public use

### Fixed

- all image commands work again
- =user lists not working properly
- completely and utterly fixed =forum
- =purge
- =mute

### Internal

- FileWatchManager fixed, now shows added files and core part updates
- now using complex cluster sharding system reducing memory usage by 90%
- now using sharding for the web manager, highly reducing the music module
- now using fetch-on-the-spot instead of precaching everything
- changed member / user searching algorithms [had to]
- added numerous events to watch out for rate limitations

### Updated

- everything to do with warnings, they now save to the database along with the reason
- =forum expanded to allow for absolute control over the forum you want to have

### Removed

- =log [no one ever used this]

### [11.2.0] 14-02-2023 21:00

### Progress

- massive database fetching optimizations, no longer fetching everything at once [AVG CPU 30->10]
- denying a forum post now shows the post name in question

### Changed

- internal welcome message refresh timer 20 minutes -> 5 minutes

### Fixed

- =request now works
- =pskip works (better)
- =q displays correct amount of songs in the queue and allocates time more accurately
- Relaxy correctly identifies when it should leave the channel now

### [11.5.0] 18-02-2023 02:00

### Progress

- reorganized the image file structure
- lots of little algorithm optimizations

### Upgraded

- modlogs have been internally overhauled and now have 6 new events and every existing one has been improved
  StickerCreate StickerUpdate StickerDelte
  ChannelPinsUpdate ThreadCreate ThreadDelete
- censoring, autoban and autorenaming has been improved
- =warn now saves the reason to the database
- autoban now gives an actual reason when banning / warning
- =pat and =hug will not have missing links anymore
- =censor now accepts 'links' and 'invites' to block those (also works when messages are edited now)
- autorenaming now works not only when people join

### Fixed

- all image commands now work
- welcomechannel fixed
- welcomemessages fixed

### Changes

- autoroles now give a reason and trigger on joining the server, not sending a message

### [12.0.0] 04-05-2023 2:00

### Biggest update so far!

### Improvements

- things to save to the database no longer modified inefficiently
- no more garbage code inside of the cluster manager
- removed useless garbage code
- #relaxy-log now improved by a lot
- the censoring algorithm is now improved by a lot
- moved administrator commands into their own directory
- all commands now support being converted into / commands over time

### Added

- =rename - change the name of any role, user or channel!
- =raidprotection - =lockdown but more (or less) extreme!
- a lot of new modlog events
- =autorole - give a role to everyone who joins automatically
- =record and =halt - voice recording coming back from the dead after being for for like a year or two!
- low spam mode for modlogs, access it with =modlog lowSpam

### Updated

- completely overhauled how things are saved into the database preventing save delay.
- updated user search detection algorithm so that it works like it did before switching to hybrid sharding
- all channels that send messages to different channels to account for new channel types
- =clean -> =free
- =lookup -> =whois
- =lvlout -> =levelout
- UserFileInteractionManager.js -> FileInteractionManager.js

### Fixed

- modlogs will no longer be turned off after being redirected to another channel while the original is deleted
- Relaxy! will no longer leave channels while music is playing because he detects the channel as empty / music as invalid
- leveling counts even if in a restricted channel
- =help additional information not displaying correctly
- =myman and =drip not working

### Changed

- many more commands will now show the information about their status when put without arguments instead of simply turning those features off. It will be updated for consistency later

### Removed

- the ability for Relaxy to send a message across ALL servers

### Upcoming

- =warningtier - set your own punishments!
- =appealchannel - now sinners can come back!

# [1.0.0] 09-06-2023 23:30

## Changes:

- Completely changed the code structure to look like something a proper dev wrote
- Updated the music module to accurately reflect how many users are within a vc

## Fixed:

- Links within censoring now get detected accurately as well as **links** and **invites** being boldened when displayed in =censor

## Upcoming:

- warning_tiers
- raid_protection

# [1.0.1] 10-06-2023 20:00

## Updates

- Warnings now decrement 1 for every ban a user receives -1 for the first ban, -2 for the other etc.
- =ban and =kick now detect _any_ form of the word `date` instead of just the lowercase version

## Fixes

- Warnings now count and ban people properly (something broke during the conversion process last update)

# [1.0.2] 24-06-2023 1:30

## Added

- =reactionpanel - REAL TIME (fancy) monitoring and moderation of reactions for a given message

## Fixes

- Fixed music state being reported incorrectly
- Fixed warning counts displaying incorrectly when doing =warn

## Upcoming

- =warningtier - set your own punishments!
- =appealchannel - now sinners can come back!

# [1.0.3] 25-06-2023 7:30

## Updated

- =poll - more to come soon (multi-reset polls)

## Fixes

- =kiss, =spank, =slap no longer incorrectly detect users.
- You can add the bot to server now... it doesn't require oauth anymore

## Upcoming

- =warningtier - set your own punishments!
- Leveling overhaul / level tiers

# [1.1.0] 25-06-2023 22:00

# Improvements

- All commands now have properly documented required permissions
- Almost all commands and features have a 'fallback' mode where they won't display embeds

# Removed

- Welcome messages and stuff related to them has been cut
- some """controversial""" image commands have been removed

# Upcoming

- =poll multi-resets
- =warningtiers
- =leveltiers
- Leveling overhaul
- Relaxy added to top.gg! — 01/07/2023 20:25

# [1.4.0] 04-07-2023 04:20 (funny)

## Upgraded

- modlogs
- bunch of other shit

## Added

- =caption (GO TRY IT OUT IT'S AWESOME)

# [1.4.1] 04-07-2023 17:30

## Upgraded

- =caption

## Fixed

- spelling mistakes on sticker events
- editing messages sometimes working incorrectly (being worked on rn)
- messageUpdate event not triggerring correctly when an attachment was added that hasn't previously been present in the message before.
- threadDelete event not detecting non Relaxy! forum post deletions correctly

## Updated

- =devlog and =credits text

# [1.4.2] 06-07-2023 00:00

# Upgrades

- heartboards have been internally overhauled to be better (and work + work faster)
- database - the general database architecture and code is improving and will be changed completely within the upcoming updates
- denesting numerous functions and improving error handling

# Upcoming

- reminds will return

# [1.4.3] 07-07-2023 02:45

# Upgrades

- all modlog events have been upgraded to more accurately display data (who did what in particular)
- multiple core functions have been optimized for speed

# Changes

- Relaxy! Top.gg vote time 12h -> 20h (embed will auto delete after 20 seconds as well)

# Fixes

- it is now correctly calculated which word was censored
- messageEdit now shows when announcement messages from other servers get changed
- people will no longer get randomly renamed with censoring on

# Upcoming

- reminds will return
- music player overhaul (?)

# [1.4.34] 08-07-2023 01:30

# Upgrades

- member searching algorithm is, at last fixed forever now
- time search algorithm (mainly within =poll, =mute) is finally fixed

# Upcoming

- =purgepanel - advanced message moderation!
- reminds will return
- music player overhaul (?)

# [1.4.3.5] 08-07-2023 02:45

# Updated

- new fancy #relaxy-logs (more to come soon)

# Fixed

- stickerUpdate event having missing items
- numerous commands displaying \`\` instead of `None.` when no permissions are present

# Upcoming

- =purgepanel - advanced message moderation!
- reminds will return
- music player overhaul (?)

# [1.4.3.6] 08-07-2023 03:00

# Added

- =unban - self explanatory

# Fixed

- guildBanAdd and guildBanRemove now properly display the reason / user who did it

# Upcoming

- =purgepanel - advanced message moderation!
- reminds will return
- music player overhaul (?)

# [1.4.3.7] 08-07-2023 03:30

# Updated

- =unban has an unban reason

# Fixed

- numerous events incorrectly displaying the thumbnail

# Upcoming

- modlog updates
- =purgepanel - advanced message moderation!
- reminds will return
- music player overhaul (?)

@everyone Big one coming

# [2.0] 14-07-2023 03:00

# Improvements & Updates

- A custom RateLimiter preventing Relaxy from stressing the API
- Updated ReadMe and other texts.
- Anything within the key file is now stored in a separate enum called DataTypes.js
- All reactions have been changed to use the ratelimiter preventing strain / invalid placement
- Same thing done to edits and messages sent (still working on it)
- Added 'spam' as a custom option to =censor to censor spam
- All modlogs should more accurately display the author / executor + have less of an interval and display more information wherever applicable + more coming soon.
- Improved internal logic regarding #relaxy-log
- All quickembeds have had their logic improved
- Relaxy forum database structure overhauled
- Custom message system within the `Relaxy Manager` implemented
- Custom heartbeat system within the `Relaxy Manager` implemented - Shards, broken or unresponsive will now get revived by the power of God himself whenever something really bad happens.
- ReCluster manager added, whole clusters of shards are able to be reset silently without altering the user experience
- Using _raw_ methods to print to output, directly to stdout.write instead of using console.logs etc
- Massively improved documentation
- Manager program has better alive / dead shard detection
- Added numerous checks to determine permissions better, added fallback systems that hel with low-permission usage
- many commands had their internal code improved
- =invite now displays a link where to vote for the bot.

# Removed

- Manual caching of custom emoji IDs
- Logging within custom embeds

# Overhauls

- =forum has received massively improved internal logic that provides Relaxy with smarter matching, responses and spam filtration
- Database system for server has been overhauled because it was taking up too much space, if your heartboard doesn't work message me!

# Fixes

- =reactionrole correctly detects custom emojis and is able to handle up to... 40000 reactions per 10 seconds according to my calculations
- Checking permissions now correctly works within a channel

# Changes

- =asciify -> moved to =toolkit asciify
- =calc -> moved to =toolkit calculate

## =ping -> =status | CHECK IT OUT, MASSIVE UPGRADE, all of Relaxy's important information at the palm of your hand

# Additions

- =toolkit spam/hextodec/censor -> too long to write here, check it out for yourself.

# Upcoming

- Whatever was in the latest big announcement
- Overhaul of =embed to provide a better and easier user experience
- Ability for servers to store files within Relaxy that can then be placed into embeds where applicable
- something with music cause it fucking sucks

* Many many many more changes that would take too long to write here.

# Remember to vote for Relaxy so we can become unstoppable

# https://top.gg/bot/775358898088968202/vote

# [2.1] 15-07-2023 11:00

# Fixed

- Heartboards work properly now

# Updated

- Heartboard database structure - sorry guys! All previous heartboard posts are non-functional now. Only the new ones work!
- Naming scheme within some files
- =status now displays global status
- Added more documentation

# Upcoming

- Refer to previous posts.

# [2.2] 16-07-2023 05:30

# Improvements & updates

- Complete overhaul of the heartboard logic & database structure
- Now using a standardized message format between node processes
- Proper status saving between resets
- New #relaxy-logs added for turning on after a hard exit + reclustering events
- Added the description event change to channelupdate and channelcreate
- Added lots of documentation within the code
- Fixed member fetch function to be more accurate

# Fixes

- HeartBoardPosts now properly display the color selected within =heartboard
- RateLimiter less prone to malfunctions (still pretty prone though)
- =devlog now works [improved function within Utilities]

# Upcoming

- Incorrect time fetching with =mute when a userId is used
- Whatever was in the latest big announcement

# Removed

- Some useless data from the heartboard section in the server scheme

# Remember to vote for Relaxy so we can become unstoppable

# https://top.gg/bot/775358898088968202/vote

# [2.3] 18-07-2023 17:15

# Improvements

- Massive internal overhauls to different algorithms but mainly the execution of Reclustering

# Updates

- You can now have however many heartboards you want, each fully customizable (I can add some more customizability or whatver just dm me :tearingup:)
- =save will now save any **IMAGE ONLY** files that have the name prefix "server-" into the server storage. You need the `ManageGuilds` permission for it.
  This will make it so that if you mention the name (without the server- prefix) within any of the embed commands f.e =embed, =customizeprefix, =customboostmessage (COMING OUT TODAY)) that file will be inserted into any field, author icon, image, thumbnail

# Upcoming

- forum channel improvements
- music improvements
- leveling improvements.

# [2.4] 22-07-2023 20:45

## Improvements & Updates

- ProcessIPCMessage.js -> moved into Services/IpcMessenger.js
- FileWatcher.js -> moved into Services/FileWatcher.js
- Events.js -> moved into Services/EventCatcher.js
- Reclustering mode changed from graceful to rolling (recluster will occur when shards reset 1 by 1 in real time instead of all at once while all the new ones are ready as it could cause database overwrites (VERY VERY BAD))
- You can now have multiple heartboards
- Achievements are now disabled on all servers until an appropriate command is made
- Fixed some modlogs incorrectly showing the user (not all of them yet!)
- heat death mute
- Removed redundant code

## Additions

- You can now store files to "server storage" with "=save server-filename"
  To access them do "=files server". These files can be used within =embed or
  =customboostmessage or anything else that uses =embed formatting!
  To access it simply type the file name without the extension within the embed property:

`=embed title: "I like embeds", image: "filename" (or image: { url: "filename" } if you're a nerd)`

It will only accept files on "server storage" saved with the prefix "server-"

- GarbageCollector has been incorporated into Relaxy that will queue up deletions of different database parts when needed. Relaxy will now store deleted server data up to 30 days after the server has kicked Relaxy out in case they want to have him again.
- New hug and pat links.
- =customboostmessage - a =embed formatted custom boost message, available for a normal boost and reaching level 1 2 or 3 with each being able to be put in a different channel
- You can now do "=pfp server" to show the server's icon

# Upcoming

- Internal handlers for specific stuff like messages channels etc to clean up the code
- forum channel improvements
- music improvements
- leveling improvements
- some more stuff

# ❤️ Remember to vote for Relaxy! ❤️

# https://top.gg/bot/775358898088968202/vote

# [2.4.1] 22-07-2023 22:22

## Fixed

- Incorrect deletion of modlogs within the database

## Added

- Fallback in case a user has the Relaxy muted role but isn't within the database.

# [2.4.1.2] 24-07-2023 00:34

# Changes

- =clearchannel -> =clearingchannel | renamed because a retard couldn't read a simple description

# Improvements

- improved code for =lovemeter

# Fixed

- Emoji searching function (worked fine but threw an error)
- Hearboards properly display embeds
- When on_message_delete is enabled relaxyforums forums will properly respond when a message is deleted before a reaction is added

# Upcoming

- whatever was before
- recreate the Counting bot and Ticket bot within Relaxy
