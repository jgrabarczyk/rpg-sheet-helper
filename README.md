# RpgSheet
Create your new Dark Heresy II character step by step.
Update Character stats, roll tests etc.  

## Development 
Run `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`. 

## RoadMap
- add Roll logger to sheet page
- add Equipment
- add Experience


### Todo
- add tests
- improve dhii-DHII_CreatorService.getTalentsByNames()
- in step-navigation use 'step' attribute as grid class 
- add readonly option for sheet page

### In progress: EQ update
- add armour 
    - armour
    - modifications
- add items 
    - gear
    - tools
    - cybernetics
    - drugs & consumables 
- rework talents - use specialisations to determin effective useage of armour, weaons etc. 
- do not forget item quality
``` 
ItemQuality {
    'Poor' : +10
    'Common': 0
    'Good': -20
    'Exeptional': -30
}
``` 
