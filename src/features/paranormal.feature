Feature: Paranormal
  In order to avoid silly mistakes
  As a UI developer
  I want to test my code

  Scenario: UX test framework
    Given I have 'PhantomJS' on 'Desktop'
    When I open the test page
    Then I should see 'PARANORMAL' as the page title

# cucumber-js does not support examples
# https://github.com/cucumber/cucumber-js/issues/10
#  Examples:
#    | browser   | device  |
#    | PhantomJS | Desktop |
#    | Firefox   | Desktop |
#    | Chrome    | Desktop |
#    | IE9       | Desktop |
#    | IE8       | Desktop |
#    | IE6       | Desktop |
#    | Safari    | iPad    |
#    | Safari    | iPhone  |
