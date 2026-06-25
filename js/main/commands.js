/**
 * Auto-generated from the Relaxy! bot command sources.
 * name -> { u: usage, d: description } (mirrors what =help shows).
 */
window.RELAXY_COMMANDS = {
    '8b': {
        'u': '=8ball',
        'd': 'Gives back a randomized answer for your question.'
    },
    'buy': {
        'u': '=buy',
        'd': 'Buy an item from the Relaxy! shop.'
    },
    'coinflip': {
        'u': '=coinflip heads/tails bet',
        'd': 'Bet on a coinflip side, **bet** being how much money you want to bet.'
    },
    'customboostmessage': {
        'u': '=customboostmessage',
        'd': 'If on, Relaxy will send a custom message that you can set whenever:\n- someone boosts the server\n- the boost switches the server boost level (1, 2, 3)\n\nTo change the message, simply type (command) boost/level_1/level_2/level_3 after that either type text or `embed`\nYou can also set whether or not to delete the discord system message with the argument `delete_original` (once the feature has been turned on)\n\nReplacers - if you input the following special texts, they will be converted to the following:\n- |U| - user who boosted\n- |G| - name of the server\n- |C| - channel in which the boost appeared in'
    },
    'dice': {
        'u': '=dice number',
        'd': 'Returns a random number from 1 to the number specified. (max 1000000)'
    },
    'heartboard': {
        'u': '=heartboard (existing channel (optional)) number (optional)',
        'd': 'Relaxy creates a heartboard channel for you.\nShould any message that Relaxy can see get 3 special reactions (default is :heart: but can be changed, the initiator is the first one from the provided list), it will is going to get put on the heartboard.\nIf a message returns back to 0 special reactions, it\'s going to get deleted.\n## After the heartboard is enabled\nYou can type either:\n- `colour` - after that type a hex code. This is wha the colour of the embed will be.\n- `emojis` - after that a list of 5 emojis, first one will be the required reaction.\n- `off` - turns off the heartboard.\n\nYou can create multiple heart board channels, to change settings of a specific one simply type the channel as the first argument and the rest as normal.'
    },
    'inventory': {
        'u': '=inventory user (optional)',
        'd': 'Shows your or the specified user\'s Relaxy inventory!\nThe numbers in front of the items represent the internal position of the item in the inventory.\nAfter doing **`=inventory`** you can say **equip/unequip/discard/scrap ITEM_ID** to do the action with the item.\nScrapping any item will gain you 100 money!'
    },
    'leaderboard': {
        'u': '=leaderboard',
        'd': 'React with 🔠 to show the top 15 people message count wise (since Relaxy joined the server),\n react with 🔢 to show the top 15 people level wise.\nReact with ⏹️ to return to the main page.'
    },
    'leveling': {
        'u': '=leveling type (optional)',
        'd': 'Relaxy on leveling on the server.\nTypes of leveling are:\n**1** - Shows messages on levelup along with cards,\n**2** - Shows only messages on levelup,\n**3** - Shows only levelup cards,\n**4** - Doesn\'t show anything.\nEnabling leveling gives access to the `=leaderboard` and `=level` commands.'
    },
    'lovemeter': {
        'u': '=lovemeter user user',
        'd': 'Gives back a percentage of \'love\' you have to that user.\nFirst user is required while the second one isn\'t.'
    },
    'lvl': {
        'u': '=lvl user(optional)',
        'd': 'Gives a level / rank card of you aor another user.\nWorks only if =leveling is on.'
    },
    'minesweeper': {
        'u': '=minesweeper rows columns mine_count classic_start',
        'd': 'Play a game of minesweeper!\nDefault options:\n- 9 rows,\n- 9 columns,\n- 25 mines,\n- doesn\'t show first cell,\nClassic start reveals the first cell when starting the game.'
    },
    'poll': {
        'u': '=poll',
        'd': 'After initiating the command, press any of the first 5 buttons to edit the poll\'s properties.\n**To start the poll, press the button \'Post Poll\'.**'
    },
    'preview': {
        'u': '=preview',
        'd': 'Preview an item from the Relaxy! shop.'
    },
    'profile': {
        'u': '=profile',
        'd': 'View your Relaxy profile.'
    },
    'rep+': {
        'u': '=rep+ userDb',
        'd': 'Give someone an arbitrary reputation point **(some money and xp too)**!'
    },
    'shop': {
        'u': '=shop',
        'd': '**Show the Relaxy shop!**'
    },
    'snake': {
        'u': '=snake',
        'd': 'Get to play a game of snake.\nPlease do not spam the reactions. `(refresh time once per 0.5 seconds)`\nEnds when:\n- You drive the snake into itself,\n- Are idle for some time.'
    },
    'trade': {
        'u': '=trade user(MENTION/ID ONLY!) ITEM_ID (money + money_count) / ITEM_ID',
        'd': 'Trade an item with another user! Follow one of these command structures:\n**=trade MattFor 1 2**\n`OR`\n**=trade MattFor 1 money 300**\nPro tip: should you want to trade for nothing, just do money0 ;)'
    },
    'translate': {
        'u': '=translate (to language) (from language) (text to translate)',
        'd': 'Translates text from one language to another.\n**Available languages all use the `language name/ISO 639-1` code**\n'
    },
    'welcomechannel': {
        'u': '=welcomechannel (type)',
        'd': 'Adds a channel where Relaxy! will send welcome/goodbye messages when people join/leave your server.\n## After it is used, use it again to configure how the welcome messages function / look'
    },
    'banner': {
        'u': '=banner (user / \'server\')',
        'd': 'Shows your or another user\'s banner picture.\n- "server" to show server banner.'
    },
    'caption': {
        'u': '=caption text',
        'd': 'Give a desired gif/png/jpg a white bar with a caption.\nCan reply to a message with an attachment to use that one instead.'
    },
    'changemymind': {
        'u': '=changemymind text',
        'd': 'Adds the specified text to the \'change my mind\' meme template.'
    },
    'circlepfp': {
        'u': '=circlepfp user',
        'd': 'Shows a big circle image of the user specified or yourself.'
    },
    'confusedstonks': {
        'u': '=confusedstonks user',
        'd': 'Adds yours or the specified user\'s profile picture to the \'confused stonks \' meme template.'
    },
    'delete': {
        'u': '=delete user',
        'd': 'Adds yours or the specified user\'s profile picture to the \'delete this trash\' meme template.'
    },
    'doesntaffect': {
        'u': '=doesntaffect user',
        'd': 'Adds profile picture to meme template.'
    },
    'drip': {
        'u': '=drip user',
        'd': 'Adds yours or the specified user\'s profile picture to the \'drip\' meme template.'
    },
    'execute': {
        'u': '=execute user user2',
        'd': 'Adds yours or the specified user\'s profile picture a stock picture of a kill.'
    },
    'gay': {
        'u': '=gay user',
        'd': 'Adds a gay flag overlay to yours or the specified user\'s profile picture.'
    },
    'hug': {
        'u': '=hug user',
        'd': 'Hug someone!'
    },
    'kiss': {
        'u': '=kiss user',
        'd': 'Kiss someone!'
    },
    'myman': {
        'u': '=myman user',
        'd': 'Adds yours or the specified user\'s profile picture to the \'my man\' meme template.'
    },
    'pat': {
        'u': '=pat user',
        'd': 'Pat someone!'
    },
    'payrespect': {
        'u': '=payrespect user',
        'd': 'Adds yours or the specified user\'s profile picture to the \'press f to pay respects\' meme template.'
    },
    'perfect': {
        'u': '=perfect user',
        'd': 'Adds yours or the specified user\'s profile picture to the \'this, this is beautiful\' meme template.'
    },
    'pfp': {
        'u': '=pfp (user / \'server\') (raw)',
        'd': 'Shows profile picture.\n- \'raw\' to show non-server profile.\n- \'server\' to show server icon.'
    },
    'phub': {
        'u': '=phub text',
        'd': 'Falsifies a pornhub comment.'
    },
    'picture': {
        'u': '=picture keywords',
        'd': 'Search a gif/image on google with the keywords specified.\nIf used in an nsfw channel or by a user with administrator access with the argument \'nsfw\' then it will return nsfw results'
    },
    'present': {
        'u': '=present text',
        'd': 'Adds the text to the meme template.'
    },
    'putin': {
        'u': '=putin user',
        'd': 'Adds yours or the specified user\'s profile picture to the framed picture in putin\'s meeting room.'
    },
    'reddit': {
        'u': '=reddit subreddit name (without r/)',
        'd': 'Get a random post from a specified subreddit.'
    },
    'ross': {
        'u': '=ross user',
        'd': 'Adds yours or the specified user\'s profile picture to a Bob Ross painting.'
    },
    'sakify': {
        'u': '=sakify user',
        'd': 'For a friend.'
    },
    'slap': {
        'u': '=slap user',
        'd': 'Slap someone!'
    },
    'spank': {
        'u': '=spank user',
        'd': 'Spank someone.'
    },
    'stonks': {
        'u': '=stonks user',
        'd': 'Adds yours or the specified user\'s profile picture to the \'stonks\' meme format.'
    },
    'sus': {
        'u': '=sus user',
        'd': 'I fucking hate this command don\'t use it.'
    },
    'trash': {
        'u': '=trash user',
        'd': 'Adds yours or the specified user\'s profile picture to the \'delete this trash\' meme format.'
    },
    'triggered': {
        'u': '=triggered user',
        'd': 'Adds yours or the specified user\'s profile picture to the \'triggered\' meme format.'
    },
    'customizewelcome': {
        'u': '=customizewelcome option text',
        'd': 'Option must be:\n- join_message.\n- leave_message.\n- join_top.\n- leave_top.\n- join_bottom.\n- leave_bottom.\nThe text for join_message and leave_message can include **|U|** which is going to be replaced with the user who joined/left.\nIt can also contain **|G|** which is going to be replaced with the server name.\nYou can also use**`=embed`** formatting to send an embedded message, it only works with text files as embed code can get pretty big!\nIf you\'re using a welcome option with an image, it\'s going to appear on the big field in the embed.'
    },
    'devlog': {
        'u': '=devlog',
        'd': 'Shows what features MattFor has been working on recently.'
    },
    'dmout': {
        'u': '=dmout',
        'd': 'Opt out of receiving a message when joining a server with dm welcomes/leaves on.'
    },
    'embed': {
        'u': '=embed (embed object representation)',
        'd': 'Send an embed like a bot would, as to how you should format it, please refer to the image below.\nFor more information, use **[this lovely link](https://discordjs.guide/popular-topics/embeds.html#using-an-embed-object)**. Instead of writing `\'` in a word like `don\'t`, please write `|`, f.e `don|t`.\nSame goes for `:`, please replace that with `;;`. (unless using a link) \nReplace `,` with `<>`, when wanting to do `enter`, instead of just pressing enter, please type `~=` instead.\nWhen intending on having spaces in text please use "" instead of \'\'\nWhen writing in a text field surrounded by "" please double any brackets f.e ( becomes (( and } becomes }}.\nShould the embed you want to build exceed the discord message size limit, please send a text file instead.\n\n**I know this is hard to get a hold of but it offers full customization of embeds.**\nYes, even more. If you want to edit an existing embed, type \'=embed edit [channel] [message id]\' you will be prompted to do the rest.\n## Should you have any server files that you want to appear outside of the embed, simply type "attachment://attachmentName.extension".'
    },
    'fetch': {
        'u': '=fetch filename',
        'd': 'Relaxy returns the file you saved with filename.'
    },
    'files': {
        'u': '=files',
        'd': 'Get a list of all of your files saved with =save. To delete files click the button and then input the appropriate index or range (index1 - index2).\n\nType \'server-\' as the first argument to access the server\'s files. Requires the `ManageGuild` permission.'
    },
    'forum': {
        'u': '=forum #channel (roles / emoji / option arguments)',
        'd': 'Creates a configurable forum channel where members with a role will either allow or reject posts.\n**Roles** - optional argument to instantly set the roles that will be able to manage posts (without relaxy setting one up himself)\n**Emoji** - the emoji that will be used when creating posts.\nTo check the settings of an already existing forum channel, simply type =forum #channel.\nTo go more in depth, type f.e =forum #channel response/match.\nThings to configure:\n\n```fix\nmatch\n```Type =forum #channel match `(keywords/sentences with spaces replaced by -)`\nThis will make it so that any post with the requested phrase/words will automatically be rejected.\n\n```fix\nsensitive\n```Type =forum #channel sensitive #channel2\nPosts made on the original channel will be instantly deleted and piped onto the second channel.\n\n```fix\nhide\n```Simply will hide the channel for everyone without sufficient permissions when Relaxy is unavailable (useful when paired with the sensitive option)\n\n```fix\nresponse\n```Type =forum #channel response [Match keyword] sentence to reply with, remember that |U| will be replaced with the user, |T| with the thread name and |G| with the guild.\nThere are 3 options you cannot delete, 2 of which are set to default: len, reject, accept.\n\n```fix\nlength\n```Type =forum #channel length number / -number\nIf the number is negative, it will delete posts under the desired length, otherwise it will delete posts over the desired length.\n\nTo turn off Relaxy functionality in a forum channel type =forum #channel off. imeout - seconds\n`attachment_exception` - do not take length into account when attachment is present.\n`raw_search` - crude search algorithm will be used in place of advanced one.\n`original_message_deleted` - delete thread if original message is gone\n`attachment_length / body_length / title_length` - if number is negative then check for less than, if positive, check over.\n`spam` - delete posts considered spam by Relaxy!'
    },
    'getemoji': {
        'u': '=getemoji [multiple] emojis/stickers',
        'd': 'Get the image of an emoji or stickers provided.\n type "multiple" as the first argument to insert multiple stickers/emojis at once [will not display]'
    },
    'halt': {
        'u': '=halt',
        'd': 'Stop recording with Relaxy!\\Recording also stops when you kick Relaxy! or all users leave a channel.'
    },
    'help': {
        'u': '=help commandname (optional)',
        'd': 'Get a list of all commands or information about a single command.'
    },
    'invite': {
        'u': '=invite',
        'd': 'Get a link for a support server along with the link to invite relaxy to your server.'
    },
    'jointocreate': {
        'u': '=jointocreate (anything here for ManageChannel perms)',
        'd': 'Creates a channel, which when joined will spawn a Relaxy! Private Channel which each member of can control according to his needs. To delete a Relaxy! Join to Create channel, just do =jointocreate channel.\nIf you want users to automatically get ManageChannel permissions, type anything after the command.'
    },
    'levelout': {
        'u': '=levelout',
        'd': 'Opt out of being shown on =leaderboard. People also won\'t be able to =level @you.'
    },
    'mixemoji': {
        'u': '=mixemoji emoji1 emoji2',
        'd': '```diff\n- Nitro emojis not supported -\n```Merge multiple emojis into one, some do not work.\nIf you use the "wand" emoji, you will the get the "blob" version.'
    },
    'move': {
        'u': '=move (voice chat 1) (voice chat 1)',
        'd': '## Shows the Relaxy! music options in a your server.\nThere are 4 types of options, to change them simply type =musicoptions [option_number] (additional arguments)\n**1.** Set whether the bot should leave or not after calling =stop.\n**2.** Set whether the bot should leave the channel after music stops.\n**3.** Set how long Relaxy! will buffer music before it plays (in MS). May impact quality.\n**4.** Set the initial volume of the bot. Default: `10`'
    },
    'musicoptions': {
        'u': '=musicoptions',
        'd': '## Shows the Relaxy! music options in a your server.\nThere are 4 types of options, to change them simply type =musicoptions [option_number] (additional arguments)\n**1.** Set whether the bot should leave or not after calling =stop.\n**2.** Set whether the bot should leave the channel after music stops.\n**3.** Set how long Relaxy! will buffer music before it plays (in MS). May impact quality.\n**4.** Set the initial volume of the bot. Default: `10`'
    },
    'pickrandomreacter': {
        'u': '=pickrandomreacter reactionMessageChannelId reactionMessageId (number of people default 1)',
        'd': 'Gives a random list from those who reacted to a message.\nUseful for giveaways.'
    },
    'prefix': {
        'u': '=prefix new prefix(es)',
        'd': 'Add a prefix (or multiple) to Relaxy! on this server! (Type =prefix set (prefix) to erase all others and have only 1)]\nType nothing to view server prefixes.'
    },
    'privatechannel': {
        'u': '=privatechannel person_limit_number kbps_value channel(Only when editing existing private channels)',
        'd': 'Create a channel with a (Default 2) person limit.\nWhen people join that chat they are given the ability to edit the number of people who can join and the kbps value. You do that by just saying =privatechannel personlimit kbps (optional, voice region).\nTo edit the channel name, type the new name in "quotes" and that\'s what it wil be renamed to.\nRelaxy will autodetect the channel you\'re in and edit it as requested.\nWhen everyone leaves it will reset back to the default value provided.\n\nWhen trying to edit a channel simply # it at the end of the command to edit it.\n**To delete a private channel:**\nEither delete it yourself normally through discord or type =privatechannel channel.\n```diff\n- warning-\n```When selecting the channel name when editing, when it has spaces replace them with `-`.\nF.e when wanting to edit #Private 1, type Private-1\n\nREQUIRED PERMISSION TO CREATE CHANNELS: `MANAGE_CHANNELS`'
    },
    'record': {
        'u': '=record',
        'd': 'Relaxy starts recording the current voice channel, doesn\'t work if any music is playing.'
    },
    'redirect': {
        'u': '=redirect option channel',
        'd': 'Redirect a Relaxy! function to a given channel.\nF.e **=redirect leveling #bot-actions**\nAvailable redirectors:\n- leveling\n- modlog\n- heartboard\n- censoring\n- achievements\n- welcomes\n- leaves\n- forum (special: =redirect forum #(current forum channel) #(new forum channel)'
    },
    'relaxytime': {
        'u': '=relaxytime',
        'd': 'Shows Relaxy!\'s internal clock.'
    },
    'remindme': {
        'u': '=remindme 1 [minute / hour / day / week / month / year] about [thing]',
        'd': 'Relaxy will remind you about the thing you requested after the specified amount of time.'
    },
    'reminds': {
        'u': '=reminds',
        'd': 'Show all of your active Relaxy reminds! If you want to remove a remind type =erase (remind number from the list).'
    },
    'rename': {
        'u': '=rename channel/user/role',
        'd': 'Give a new name to whatever you want.'
    },
    'request': {
        'u': '=request request',
        'd': 'Request a feature to be added to Relaxy! or report a bug.'
    },
    'roleinfo': {
        'u': '=roleinfo role mention/id/name',
        'd': 'Get general information about a role.'
    },
    'save': {
        'u': '=save filename file',
        'd': 'Filename is the \'codename\' of the file you want to save.\nThe file can be either text, or any other kind of file! (except .txt)\n\n# You can save files to server storage.\nOnly people with the `ManageGuild` permission are able to do it.\nTo save a file to server storage simply prefix the file name with \'server-\'.\nThose files can later be used within embeds, custom nitro messages and more on that server.'
    },
    'stats': {
        'u': '=stats',
        'd': 'Show an enormous amount of information about the server you\'re on.'
    },
    'status': {
        'u': '=status',
        'd': 'Show information about Relaxy\'s clusters.\n\nIf \'Low Performance\' mode is on, Relaxy is running on a small server and thus some services are unavailable.'
    },
    'steamgame': {
        'u': '=steamgame name/gameId',
        'd': 'Gets the information of any Steam game.'
    },
    'thanks': {
        'u': '=thanks',
        'd': 'Shows the page with the names of people who helped me make the bot along with what they contributed!'
    },
    'ticketsystem': {
        'u': '=ticketsystem',
        'd': 'Create and manage a server-wide ticket system. Members open tickets by pressing buttons on a message; each ticket is delivered to the channels / staff you choose, while the member who opened it keeps a private copy in their DMs.\n\n**Setup**\n`=ticketsystem` - create a brand new ticket channel with a starter message and a single "Create Ticket" button.\n`=ticketsystem #channel` - add another ticket system message to an existing text channel.\n`=ticketsystem [message id]` - open the editor for a ticket message in the current channel.\n`=ticketsystem #channel [message id]` - open the editor for a ticket message in another channel.\n\n**The editor** lets you fully customise a message. Use the two dropdowns to pick which **button** and which **form** (modal question) you are editing, then:\n\n**Edit**\nChange the selected button (title, modal title, colour, emoji, X/Y position) or the selected form (key, title, style, placeholder, min/max length). Moving a button onto an occupied slot swaps the two buttons.\n\n**Remove**\nDelete the selected button or form. A message must always keep at least one button, and a button at least one form.\n\n**Inputs**\nRestrict who may open this ticket - mention or paste the IDs of the allowed users / roles. Leave empty to allow everyone.\n\n**Outputs**\nChoose where submitted tickets are delivered - mention or paste the IDs of the destination channels / users. Defaults to the ticket channel itself.\n\n**Control Panel**\nToggle the moderator control panel (Claim / Completed / Private Chat / Close / Close with Answer) attached to delivered tickets.\n\n**Edit Ticket System Message Design**\nReplace the message itself with an =embed formatted message or text file.\n\n**Add New Button / Form**\nAdd another button (up to 25 in a 5x5 grid) or another form question (up to 5 per button).\n\n**Forms:** a form whose key starts with `req` is a required field. `short` forms allow up to 100 characters, `long` forms up to 4000.\n\n**Submitting:** a member presses a button, fills in the form, and the ticket is sent to every configured output plus a private copy in their DMs. Both sides follow the ticket through the buttons attached to it.'
    },
    'toolkit': {
        'u': '=toolkit toolName arguments',
        'd': 'Wide arrangement of random tools.\nType no arguments to show a list of tools.'
    },
    'visusage': {
        'u': '=visusage',
        'd': 'Visualize command usage on a graph.'
    },
    'vote': {
        'u': '=vote',
        'd': 'Get the link to vote for the bot on top.gg.'
    },
    'whois': {
        'u': '=whois user',
        'd': 'Get general information about a user or yourself if no argument is provided.'
    },
    'youtubesearch': {
        'u': '=youtubesearch song title',
        'd': 'Gives back a video url from the keywords.'
    },
    'autoban': {
        'u': '=autoban number',
        'd': 'Sets autoban for the server (works only if **`=censor`** is on)\nThe number specified is how many warnings a person gets before being banned.\n```fix\nDoesn\'t affect admins and people with permissions to ban.\n```(Max autoban number is 100)'
    },
    'autoname': {
        'u': '=autoname',
        'd': '```diff\n- ONLY WORKS IF CENSORING IS ENABLED -\n```Will automatically rename any person with a censored word in their name to something like "Renamed(random numbers)".'
    },
    'autorole': {
        'u': '=autorole roles',
        'd': 'Input roles to be added (deleted it already present) to a list.\nAll of the roles from this list will be added to anyone joining the server.\nType \'off\' as the only argument to turn it off.\nType nothing to show current autoroles.'
    },
    'ban': {
        'u': '=ban user (optional: number) reason',
        'd': 'Bans a member from the server.\nNumber is the amount of time from where the messages will be deleted (up to 7 days).\nReason can be interchanged with the second place, it\'s purpose is self explanatory.'
    },
    'banmessage': {
        'u': '=banmessage text/file',
        'd': 'Construct a Relaxy Embed message that is sent to a user before they are banned from your server.'
    },
    'censor': {
        'u': '=censor words',
        'd': 'Censor every message that includes any of the words mentioned, unlocks =autoname and =autoban.\nType first argument as \'clear\' to remove all censored words, \'off\' to turn censoring off and type nothing to show the words.\nP.S typing \'+default\' after already having it on without the default pool will add it. Similarly, typing -default will remove the default list.\nIf you add \'links\' then ALL links will be censored.\nIf you add `scams` all common Discord scam links will be censored.\nIf you add \'invites\' all discord invites will be censored.\nAdd \'spam\' to censor messages Relaxy! considers spam.\nAdd \'spammessages\' to censor similar messages that are spammed in a short period of time.\n\nIf an argument is in italics (starts and ends with a \\*) then all `-` (dashes) will be checked as if they were spaces.'
    },
    'clearingchannel': {
        'u': '=clearingchannel',
        'd': 'Add a channel that\'s going to get all of it\'s messages removed every 3 minutes.\nType \'show\' as the only argument to show all current channels.'
    },
    'disable': {
        'u': '=disable (list of commands separated by spaces OR the name/list of categories of commands to disable)',
        'd': 'Disable series or singular commands.\nAvailable categories:\n- fun\n- image\n- miscellaneous\n- moderation\n- music\nIf you do not provide any arguments it will show a list of currently disabled commands.'
    },
    'disconnect': {
        'u': '=disconnect user',
        'd': 'Disconnect someone from their voice channel.'
    },
    'dmwelcome': {
        'u': '=dmwelcome join/leave text',
        'd': 'Set a message that will be sent to a user who leaves/joins your server.\nYou can provide a text file with the =embed formatting to have the message be an embed (when doing that just type `=dmwelcome (join/leave) and add the file to the message.`\n**People can opt out with `=dmout`**\n```diff\n- leave messages only visible for users who are also with relaxy on other servers\n```Also should the message not display when someone joins and has =dmout off, check if any of the embed fields or the message itself isn\'t longer than 1950 characters!'
    },
    'exempt': {
        'u': '=exempt users / roles',
        'd': 'Disables ALL danger checks for ALL Relaxy commands for a specified user / role.\nDon\'t input anything to show current exemptions.'
    },
    'fetchban': {
        'u': '=unban userId',
        'd': 'Fetch a ban given to a user.'
    },
    'free': {
        'u': '=free user/all',
        'd': 'Remove all of the specified user\'s warnings.\nIf first argument is \'all\' then all server warnings will be removed.'
    },
    'kick': {
        'u': '=kick member reason',
        'd': 'Kick someone from the server with the specified reason (optional).'
    },
    'lockdown': {
        'u': '=lockdown',
        'd': 'Every message is going to get deleted, no one will be able to join the server and no one will be able to join any voice chat when lockdown mode is activated.'
    },
    'modlog': {
        'u': '=modlog',
        'd': 'Relaxy creates a modlog channel for you.\nEvery important server change/interaction is going to be logged there in detail.\nTo view the options, simply type =modlog again. To turn off the modlog, do =modlog off.\nTo change something, simply type =modlog (event number, take it from the list by simply doing =modlog) (channel, if you want to redirect it somewhere else or simply nothing to turn it off).\nYou can also say =modlog all (channel) to turn on everything and push it to the desired channel.\nType \'lowspam\' to turn off events that rapidly appear.'
    },
    'mute': {
        'u': '=mute user time (optional)',
        'd': 'Mute a member for an unspecified or specified amount of time (time can include the keywords: minute, hour, day, week, month, year to multiply time)\n\n### If the only argument is \'muterole\' the bot will update all channels and the role itself to use the most up to date settings.\n\n## If no time is specified, user will be muted indefinitely.'
    },
    'mutes': {
        'u': '=mutes',
        'd': 'Show all people on the server who are muted.'
    },
    'purge': {
        'u': '=purge channel (optional) messageId1 (optional) messageId2 (optional) amount [required] (below/after/new/newerthan optional)',
        'd': 'Delete any amount of messages.\nYou can type:\n- (number) - how many messages you want deleted\n- messageId1 - which message to anchor onto\n- below/after/new/newerthan - switch the deletion mode to after (only works if messageId1 is present)\n- channel - which channel to delete the messages from\n## You can also delete a range from one `messageId1` to another `messageId2`\n### To do this provide 2 `messageIds` as the only arguments\n- JavaScript RegExp is also accepted as an argument to only delete matching messages.\n\n### Default deletion mode: `before` (older, above)\n```diff\nYou NEED to use mentions for the command to work when filtering by user / selecting another channel\n- if the requested amount is above 100 the command may be a little slow to initiate -\n```'
    },
    'purgereactions': {
        'u': '=purgereactions amount channel (optional)',
        'd': 'Delete all reactions from a selected number of messages. Second argument is used if you want to delete reactions outside of the channel the command is in.'
    },
    'reactionpanel': {
        'u': '=reactionpanel message_id channelId **[optional]**',
        'd': 'Open an emoji panel that lets you:\n- remove all emojis\n- delete the message\n- remove all occurrences of a specific reaction\n- remove one occurrence of a specific reaction from a specific user\n- remove all controversial reactions (flags, letters, anything within the relaxy censor list)\nOnly type the channelId if the message is outside of the channel where the command is called.'
    },
    'reactionrole': {
        'u': '=reactionrole message/=embed formatted txt file',
        'd': 'Bind reaction roles to an existing message or send a new one. Accepts =embed formatting.\nTo bind to an existing message simply input the channel mention/id as the first argument and the message id as the second.\nTo construct a new one either type a normal message or an =embed formatted file.'
    },
    'remake': {
        'u': '=remake channel',
        'd': 'Replace the channel with a clean copy of itself.\nRemoves Relaxy functions.'
    },
    'restrain': {
        'u': '=restrain type [roles1] from [roles2]',
        'd': '**Type**:\n`1` - if you DO have [roles2] you cannot have [roles1]\n`2` - if you DON\'T have [roles1] you cannot have [roles2]\n`3` - if you DO have [roles2] you can have [roles1]\n`4` - if you DON\'T have [roles2] you can have [roles1]\n\n[roles1] or [roles2] is just a list of roles separated by spaces, can be either a role id, an @ or the role name.'
    },
    'restrict': {
        'u': '=restrict channels',
        'd': 'Turn off Relaxy in a desired channel.\nType bind as a first argument to make Relaxy only usable in the channel the command was called in or input a channel after bind to set it to that one.\nType unbind to completely clear all restricted channels.'
    },
    'setslowmode': {
        'u': '=setslowmode channel number (seconds)',
        'd': 'Set a slowmode for a channel. To turn slowmode off instead of the number type \'off\'.'
    },
    'tempban': {
        'u': '=ban user (optional: number) reason',
        'd': 'Bans a member from the server, automatically deletes all of their messages within the past week.\nNumber is the amount of time the user will be banned.\nReason can be interchanged with the second place, it\'s purpose is self explanatory.'
    },
    'unban': {
        'u': '=unban userId reason',
        'd': 'Unban a user from a server.\nCan specify a reason for the unban.'
    },
    'unmute': {
        'u': '=unmute user reason',
        'd': 'Unmute a user.'
    },
    'user': {
        'u': '=user user/role',
        'd': 'If there is at least 1 entry on this list. ONLY that user / people with the role will be allowed to use Relaxy.'
    },
    'warning': {
        'u': '=warning user reason (tier[number here])',
        'd': 'Warn a user (also sends event to the modlog), maximum reason length is 258 characters.\nYou can assign a tier to a warning by mentioning \'Tier X (x being a number from 0 to 30)\' f.e tier5 / TIER 5.\nThis must be lower case and together, it will be later removed from the actual reason and add up to a user\'s threat level.\nIf a warning tier is above half of the highest tier on the server, it will count towards an autoban if autobanning is on.'
    },
    'warnings': {
        'u': '=warnings user',
        'd': 'Show a list of users with warnings.\nMention a user to show their warnings in particular.\nIn order, the numbers mean: warning count, critical warning count (contributes to autoban), threat level (max warning tier ever received)'
    },
    'back': {
        'u': '=back',
        'd': 'Plays the previous song in the queue.'
    },
    'bitrate': {
        'u': '=bitrate bitrate',
        'd': 'Set the bitrate of Relaxy\'s music. (max depends on server boost level)'
    },
    'clear': {
        'u': '=clearq (any argument)',
        'd': 'Clears the queue, if any argument is present clears queue history as well.'
    },
    'filter': {
        'u': '=filter (filter name)',
        'd': ''
    },
    'goto': {
        'u': '=goto time',
        'd': 'Skip to a desired part of a song.'
    },
    'join': {
        'u': '=join',
        'd': 'Makes Relaxy join a voice channel.'
    },
    'jump': {
        'u': '=jump (track number)',
        'd': 'Make a desired track in the queue play when the command is called.'
    },
    'loop': {
        'u': '=loop',
        'd': 'Loops the queue (every song) until the command gets called again.'
    },
    'lyrics': {
        'u': '=lyrics (song name)',
        'd': 'Tries to show the accurate description of a song\'s lyrics (and some artist info).\nIf a song is playing on Relaxy! and you don\'t provide any title it will autosearch he current song title.\n`DISCLAIMER:` **this usually doesn\'t work as the title\'s too complicated for the search engine.**'
    },
    'pause': {
        'u': '=pause',
        'd': 'Pauses the currently playing song.'
    },
    'play': {
        'u': '=play keywords/link/attachment',
        'd': 'Play Youtube, Soundcloud, Spotify music, playlist or an attachment.'
    },
    'pskip': {
        'u': '=pskip link/keywords',
        'd': 'Works exactly like **`=p`**, difference is that =pskip doesn\'t add the track to the end of the queue but instead replaces the currently playing track. Accepts mp3/4/mov/webm s.'
    },
    'queue': {
        'u': '=queue',
        'd': 'Shows and lets you modify the currentTrack song queue\nExplanation of emojis under the message:\n⬅️ - go a page back.\n➡️ - go a page forward.\n⏪ - skips to the last song played.\n⏩ - skips to the next song in queue.\n▶️ - un-pauses the currentTrack song if it\'s paused.\n⏸️ - pauses the currentTrack song if it\'s playing.\n🔂 - loops the currentTrack song.\n🔁 - loops the currentTrack queue.\n🔀 - shuffles the song queue.\n:x: - clears the queue, currentTrack song won\'t be affected.'
    },
    'remove': {
        'u': '=remove index',
        'd': 'Removes the song from the queue by the number specified. Number correspond to those in =queue.'
    },
    'repeat': {
        'u': '=repeat',
        'd': 'Repeats the currently playing song.'
    },
    'resume': {
        'u': '=resume',
        'd': 'Resumes the currently playing song.'
    },
    'reverse': {
        'u': '=reverse',
        'd': 'Reverses the tracks in the queue. Requires at least 2 tracks in the non-playing queue.'
    },
    'search': {
        'u': '=search keywords',
        'd': 'Search for a Youtube video. Returns multiple results that you can pick from.'
    },
    'shuffle': {
        'u': '=shuffle',
        'd': 'Shuffles the queue randomly.'
    },
    'skip': {
        'u': '=skip number',
        'd': 'Skips the current song or the desired number of songs.'
    },
    'song': {
        'u': '=song',
        'd': 'Shows information about the currently playing song.'
    },
    'stop': {
        'u': '=stop',
        'd': 'Stops the music queue on the server and makes Relaxy! leave the current voice channel he\' in.'
    },
    'swap': {
        'u': '=swap index_1 index_2',
        'd': 'Swap places of 2 songs within the music queue by their indices.\nDoes not work on the current song.'
    },
    'volume': {
        'u': '=volume number',
        'd': 'Number: `1 - 100`\nChange the volume of music that Relaxy!\' playing.\nTo see the queue volume simply do =volume.'
    }
};
