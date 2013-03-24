# steps

Given /I have paranormal ready/ do
	# NOTHING TO DO HERE, see support/env.rb
end


When /I go to github/ do
	@browser.goto 'https://github.com/bboyle/paranormal'
	assert @browser.title.start_with? 'bboyle/paranormal', 'could not open paranormal repo on github'
end


Then /I should see '(.*)'/ do |title|
	assert @browser.text.include?( title ), 'did not find expected text'
end
