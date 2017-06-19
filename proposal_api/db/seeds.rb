10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: "http://github.com/grandtheft-spaceship",
    tools: "Rails, Angular 2, Postgesql",
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: "client@clientsite.com"
  )
end
