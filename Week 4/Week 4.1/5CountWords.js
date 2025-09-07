const {Command}= require('commander')
const fs=require('fs')
const program = new Command;

program
        .description('Counting the no of words in any file')
        .name('Count Worsd')
        .version('1.0.0')

    program.command('count')
                            .description('takes file name and count the words in the file')
                            // .option('-f, --file <filename>', 'file to process')-----can also be used
                            .argument('<filename>','Takes filename')
                            .action((filename)=>{
                                fs.readFile(filename,'utf8',(err,data)=>{
                                    if(err){
                                        console.log(err);
                                    }
                                    else{
                                        const len=data.split(" ").length;
                                        console.log(`total words in file are ${len}`)
                                    }

                                    
                                })

                            });

                            program.parse();
                        